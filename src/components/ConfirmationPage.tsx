// src/pages/ConfirmationPage.tsx

import React, { useState } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API calls

// UI Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; // For displaying success/error messages

// Lucide Icons
import { Pencil, Check, ShieldAlert, Loader2, Info } from 'lucide-react';

// Define a type for our form data for better type safety
// This should match the initialFormData structure in UserInput.tsx
interface FormData {
    fullName: string; dob: string; gender: string; location: string; email: string; phone: string;
    height: string; weight: string; bmi: string; bodyType: string; waistCircumference: string;
    bloodPressure: string; bloodSugar: string; cholesterol: string;
    conditions: string[]; otherConditions: string; allergiesMedications: string; surgeries: string;
    consent: boolean;
    activityLevel: string; dietaryPreference: string; smoking: string; alcohol: string; sleep: string;
}

// Helper component to display data cleanly with fallback for empty values
const DetailItem = ({ label, value }: { label: string; value: React.ReactNode }) => (
    <div className="flex flex-col sm:flex-row sm:justify-between py-3">
        <dt className="text-sm font-medium text-gray-500">{label}</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-semibold">
            {value || <span className="text-gray-400 italic">Not provided</span>}
        </dd>
    </div>
);

// Helper function to format string values
const formatStringValue = (value: string | undefined): React.ReactNode => {
    return value && value.trim() !== '' ? value : null;
};

// Helper function to format numerical values with units
const formatNumberValue = (value: string | number | undefined, unit: string): React.ReactNode => {
    const num = Number(value);
    return num > 0 ? `${num} ${unit}` : null;
};


const ConfirmationPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    // Type assertion to ensure formData is treated as our FormData type
    const formData: FormData | undefined = state as FormData | undefined;

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

    // If the user navigates here directly without data, redirect them back to the form
    if (!formData) {
        return <Navigate to="/user-input" />;
    }

    const handleEdit = () => {
        // Go back to the form, passing the existing data to pre-fill the fields
        navigate('/user-input', { state: formData, replace: true });
    };

    const handleConfirm = async () => {
        setIsSubmitting(true);
        setSubmitError(null);
        setSubmitSuccess(null);

        try {
            // Adjust the payload to match what your backend expects if necessary.
            // For example, if your backend expects numbers for height/weight/sleep,
            // ensure they are converted here, although your Mongoose schema uses Number for them.
            const payload = {
                ...formData,
                height: Number(formData.height),
                weight: Number(formData.weight),
                waistCircumference: formData.waistCircumference ? Number(formData.waistCircumference) : undefined,
                bloodSugar: formData.bloodSugar ? Number(formData.bloodSugar) : undefined,
                cholesterol: formData.cholesterol ? Number(formData.cholesterol) : undefined,
                sleep: formData.sleep ? Number(formData.sleep) : undefined,
                // Ensure `conditions` is an array, even if empty
                conditions: formData.conditions || [],
            };

            // Remove empty strings for optional numerical fields to avoid sending NaN or 0 if not provided
            if (isNaN(payload.waistCircumference as number)) delete payload.waistCircumference;
            if (isNaN(payload.bloodSugar as number)) delete payload.bloodSugar;
            if (isNaN(payload.cholesterol as number)) delete payload.cholesterol;
            if (isNaN(payload.sleep as number)) delete payload.sleep;
            
            // Make the POST request to your backend
            const response = await axios.post('http://localhost:3000/api/profiles', payload);
            
            console.log('Profile created successfully:', response.data);
            setSubmitSuccess('Your health profile has been successfully created!');
            // save it in extension storage
            // chrome.storage.local.set({ healthProfile: response.data });
            chrome.runtime.sendMessage({ type: "SAVE_HEALTH_PROFILE", data: response.data.id });

            // Optionally, navigate to a success page or dashboard after a short delay
            setTimeout(() => {
                navigate('/', { state: response.data }); 
                // You might create a new page for submission success
            }, 2000); 

        } catch (error: any) {
            console.error('Error submitting health profile:', error);
            // Check for specific error messages from the backend
            if (error.response && error.response.data && error.response.data.message) {
                setSubmitError(error.response.data.message);
            } else {
                setSubmitError('Failed to submit health profile. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <div className="min-h-screen bg-gray-50/50">
            <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
                        Review Your Details
                    </h1>
                    <p className="mt-4 text-lg text-gray-500">
                        Please confirm the information below is correct before we proceed with the analysis.
                    </p>
                </header>

                {/* Submission status alerts */}
                {submitError && (
                    <Alert variant="destructive" className="mb-4">
                        <ShieldAlert className="h-4 w-4" />
                        <AlertTitle>Submission Error</AlertTitle>
                        <AlertDescription>{submitError}</AlertDescription>
                    </Alert>
                )}
                {submitSuccess && (
                    <Alert className="bg-green-50 border-green-200 text-green-700 mb-4">
                        <Check className="h-4 w-4 text-green-500" />
                        <AlertTitle>Success!</AlertTitle>
                        <AlertDescription>{submitSuccess}</AlertDescription>
                    </Alert>
                )}

                <Card className="shadow-2xl border-t-4 border-t-health-primary">
                    <CardHeader>
                        <CardTitle className="text-2xl">Your Health Profile Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="divide-y divide-gray-200">
                        {/* Basic Information */}
                        <section className="py-4">
                            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center"><Info className="w-5 h-5 mr-2 text-health-primary" /> Basic Information</h3>
                            <dl>
                                <DetailItem label="Full Name" value={formatStringValue(formData.fullName)} />
                                <DetailItem label="Date of Birth" value={formatStringValue(formData.dob)} />
                                <DetailItem label="Gender" value={formatStringValue(formData.gender)} />
                                <DetailItem label="Location" value={formatStringValue(formData.location)} />
                                <DetailItem label="Email" value={formatStringValue(formData.email)} />
                                <DetailItem label="Phone" value={formatStringValue(formData.phone)} />
                            </dl>
                        </section>
                        <Separator />

                        {/* Physical Parameters */}
                         <section className="py-4">
                            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center"><Info className="w-5 h-5 mr-2 text-blue-500" /> Physical Parameters</h3>
                            <dl>
                                <DetailItem label="Height" value={formatNumberValue(formData.height, 'cm')} />
                                <DetailItem label="Weight" value={formatNumberValue(formData.weight, 'kg')} />
                                <DetailItem label="Calculated BMI" value={formatStringValue(formData.bmi)} />
                                <DetailItem label="Body Type" value={formatStringValue(formData.bodyType)} />
                                <DetailItem label="Waist Circumference" value={formatNumberValue(formData.waistCircumference, 'cm')} />
                            </dl>
                        </section>
                        <Separator />

                         {/* Medical Information */}
                        <section className="py-4">
                            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center"><Info className="w-5 h-5 mr-2 text-red-500" /> Medical Information</h3>
                            {formData.consent ? (
                                <dl>
                                    <DetailItem label="Blood Pressure" value={formatStringValue(formData.bloodPressure)} />
                                    <DetailItem label="Blood Sugar" value={formatNumberValue(formData.bloodSugar, 'mg/dL')} />
                                    <DetailItem label="Cholesterol" value={formatNumberValue(formData.cholesterol, 'mg/dL')} />
                                    <DetailItem 
                                        label="Chronic Conditions" 
                                        value={formData.conditions && formData.conditions.length > 0 
                                            ? formData.conditions.join(', ') 
                                            : null
                                        } 
                                    />
                                    <DetailItem label="Other Conditions" value={formatStringValue(formData.otherConditions)} />
                                    <DetailItem label="Allergies & Medications" value={formatStringValue(formData.allergiesMedications)} />
                                    <DetailItem label="Recent Surgeries" value={formatStringValue(formData.surgeries)} />
                                </dl>
                            ) : (
                                <Alert variant="destructive" className="bg-red-50 border-red-200">
                                    <ShieldAlert className="h-4 w-4" /><AlertTitle className="font-semibold">Medical Data Not Provided</AlertTitle><AlertDescription>You did not consent to provide medical information. This section is skipped.</AlertDescription>
                                </Alert>
                            )}
                        </section>
                        <Separator />

                        {/* Lifestyle */}
                        <section className="py-4">
                            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center"><Info className="w-5 h-5 mr-2 text-green-500" /> Lifestyle Information</h3>
                            <dl>
                                <DetailItem label="Activity Level" value={formatStringValue(formData.activityLevel)} />
                                <DetailItem label="Dietary Preference" value={formatStringValue(formData.dietaryPreference)} />
                                <DetailItem label="Smoking Habit" value={formatStringValue(formData.smoking)} />
                                <DetailItem label="Alcohol Consumption" value={formatStringValue(formData.alcohol)} />
                                <DetailItem label="Average Sleep" value={formatNumberValue(formData.sleep, 'hours')} />
                            </dl>
                        </section>
                    </CardContent>
                </Card>

                <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
                    <Button 
                        variant="outline" 
                        size="lg" 
                        onClick={handleEdit} 
                        className="w-full md:w-auto"
                        disabled={isSubmitting} // Prevent editing while submitting
                    >
                        <Pencil className="w-4 h-4 mr-2" />
                        Edit Details
                    </Button>
                    <Button 
                        size="lg" 
                        onClick={handleConfirm} 
                        className="bg-health-primary hover:bg-health-primary/90 w-full md:w-auto"
                        disabled={isSubmitting || submitSuccess !== null} // Disable if submitting or already successful
                    >
                        {isSubmitting ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                            <Check className="w-4 h-4 mr-2" />
                        )}
                        {isSubmitting ? 'Submitting...' : 'Confirm & Proceed'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;