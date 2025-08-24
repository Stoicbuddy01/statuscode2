// src/pages/ConfirmationPage.tsx

import React from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Pencil, Check } from 'lucide-react';

// Helper component to display data cleanly
const DetailItem = ({ label, value }: { label: string; value: React.ReactNode }) => (
    <div className="flex flex-col sm:flex-row sm:justify-between py-3">
        <dt className="text-sm font-medium text-gray-500">{label}</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-semibold">
            {value || <span className="text-gray-400 italic">Not provided</span>}
        </dd>
    </div>
);

const ConfirmationPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const formData = state;

    // If the user navigates here directly without data, redirect them back to the form
    if (!formData) {
        return <Navigate to="/user-input" />;
    }

    const handleEdit = () => {
        // Go back to the form, passing the existing data to pre-fill the fields
        navigate('/user-input', { state: formData, replace: true });
    };

    const handleConfirm = () => {
        // In a real app, this is where you would send the data to your backend API
        console.log('Final data confirmed:', formData);
        alert('Your health profile has been successfully created!');
        // Navigate to a final success page or dashboard
        navigate('/'); 
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

                <Card className="shadow-2xl border-t-4 border-t-health-primary">
                    <CardHeader>
                        <CardTitle className="text-2xl">Your Health Profile Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="divide-y divide-gray-200">
                        {/* Basic Information */}
                        <dl className="py-4">
                            <DetailItem label="Full Name" value={formData.fullName} />
                            <DetailItem label="Date of Birth" value={formData.dob} />
                            <DetailItem label="Gender" value={formData.gender} />
                            <DetailItem label="Location" value={formData.location} />
                        </dl>
                        <Separator />
                        {/* Physical Parameters */}
                         <dl className="py-4">
                            <DetailItem label="Height" value={`${formData.height} cm`} />
                            <DetailItem label="Weight" value={`${formData.weight} kg`} />
                            <DetailItem label="Calculated BMI" value={formData.bmi} />
                        </dl>
                        <Separator />
                         {/* Medical Information */}
                        <dl className="py-4">
                            <DetailItem label="Chronic Conditions" value={formData.conditions.join(', ')} />
                            <DetailItem label="Allergies & Medications" value={formData.allergiesMedications} />
                        </dl>
                         <Separator />
                        {/* Lifestyle */}
                        <dl className="py-4">
                            <DetailItem label="Activity Level" value={formData.activityLevel} />
                            <DetailItem label="Dietary Preference" value={formData.dietaryPreference} />
                            <DetailItem label="Smoking Habit" value={formData.smoking} />
                            <DetailItem label="Alcohol Consumption" value={formData.alcohol} />
                        </dl>
                    </CardContent>
                </Card>

                <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
                    <Button variant="outline" size="lg" onClick={handleEdit} className="w-full md:w-auto">
                        <Pencil className="w-4 h-4 mr-2" />
                        Edit Details
                    </Button>
                    <Button size="lg" onClick={handleConfirm} className="bg-health-primary hover:bg-health-primary/90 w-full md:w-auto">
                        <Check className="w-4 h-4 mr-2" />
                        Confirm & Proceed
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;