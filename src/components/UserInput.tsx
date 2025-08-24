// src/components/UserInput.tsx

import React, { useState, useEffect } from 'react';
import img22 from '@/images/img22.jpg';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { User, HeartPulse, Leaf, ShieldAlert, Weight, Ruler, Lock, CheckCircle, BarChart2, Mail, Phone, MapPin } from 'lucide-react';

// This defines the complete structure of our form data, ensuring type safety
const initialFormData = {
    // Basic Info
    fullName: '', dob: '', gender: '', location: '', email: '', phone: '',
    // Physical Parameters
    height: '', weight: '', bmi: '', bodyType: '', waistCircumference: '',
    // Medical Info
    bloodPressure: '', bloodSugar: '', cholesterol: '',
    conditions: [] as string[], // Explicitly type as an array of strings
    otherConditions: '', allergiesMedications: '', surgeries: '',
    // Lifestyle
    activityLevel: 'moderately-active', dietaryPreference: '', smoking: 'non-smoker', 
    alcohol: 'none', sleep: '',
    // Consent
    consent: false, // This is a boolean
};

const UserInput = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // If the user comes back from the confirmation page, their data will be in location.state
    const [formData, setFormData] = useState(location.state || initialFormData);

    // --- STATE HANDLERS ---

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev: typeof initialFormData) => ({ ...prev, [id]: value }));
    };

    const handleValueChange = (id: string, value: string) => {
        setFormData((prev: typeof initialFormData) => ({ ...prev, [id]: value }));
    };

    const handleCheckedChange = (id: string, checked: boolean) => {
        setFormData((prev: typeof initialFormData) => ({ ...prev, [id]: checked }));
    };
    
    const handleCheckboxGroupChange = (condition: string, checked: boolean) => {
        setFormData((prev: typeof initialFormData) => ({
            ...prev,
            conditions: checked 
                ? [...prev.conditions, condition] 
                : prev.conditions.filter(c => c !== condition)
        }));
    };

    // --- END OF HANDLERS ---

    useEffect(() => {
        if (formData.height && formData.weight) {
            const heightInMeters = Number(formData.height) / 100;
            const bmiValue = (Number(formData.weight) / (heightInMeters * heightInMeters)).toFixed(2);
            setFormData((prev: typeof initialFormData) => ({ ...prev, bmi: bmiValue }));
        } else {
            setFormData((prev: typeof initialFormData) => ({ ...prev, bmi: '' }));
        }
    }, [formData.height, formData.weight]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/confirm-details', { state: formData });
    };

    return (
        <div className="min-h-screen bg-gray-50/50">
            <div className="container mx-auto px-4 py-12 md:py-20">
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
                        Create Your Health Profile
                    </h1>
                    <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                        Provide your details below to get personalized health insights and analysis.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
                    {/* Left Side - Information Panel */}
                    <aside className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-20">
                            <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Why We Ask For This</h3>
                                <p className="text-gray-600 mb-6">
                                    Providing accurate information allows our system to generate a comprehensive and personalized analysis of your health.
                                </p>
                                <ul className="space-y-4 text-sm">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700"><strong className="font-semibold">Personalized Insights:</strong> Tailored recommendations based on your unique profile.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <BarChart2 className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700"><strong className="font-semibold">Accurate Analysis:</strong> Metrics like BMI and lifestyle habits are key for a precise report.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Lock className="w-5 h-5 text-health-primary mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700"><strong className="font-semibold">Data Privacy:</strong> Your data is confidential and securely handled. We will never share it.</span>
                                    </li>
                                </ul>
                                <img src={img22} alt="Health illustration" className="mt-5 opacity-90" />
                            </div>
                        </div>
                    </aside>

                    {/* Right Side - The Form */}
                    <form onSubmit={handleSubmit} className="space-y-8 lg:col-span-2">
                        
                        {/* Section 1: Basic Personal Information */}
                        <Card className="shadow-lg border-t-4 border-t-health-primary">
                            <CardHeader>
                                <div className="flex items-center space-x-3"><User className="w-6 h-6 text-health-primary" /><CardTitle className="text-2xl font-bold">Basic Personal Information</CardTitle></div>
                                <CardDescription>Let's start with the basics.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2"><Label htmlFor="fullName">Full Name</Label><Input id="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" required /></div>
                                <div className="space-y-2"><Label htmlFor="dob">Date of Birth</Label><Input id="dob" type="date" value={formData.dob} onChange={handleChange} required /></div>
                                <div className="space-y-2"><Label htmlFor="gender">Gender</Label><Select value={formData.gender} onValueChange={(value) => handleValueChange('gender', value)}><SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger><SelectContent><SelectItem value="male">Male</SelectItem><SelectItem value="female">Female</SelectItem><SelectItem value="non-binary">Non-binary</SelectItem><SelectItem value="other">Other</SelectItem><SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem></SelectContent></Select></div>
                                <div className="space-y-2"><Label htmlFor="location">Location</Label><div className="relative"><MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><Input id="location" value={formData.location} onChange={handleChange} placeholder="New York, USA" className="pl-10" /></div></div>
                                <div className="space-y-2"><Label htmlFor="email">Email <span className="text-gray-500">(Optional)</span></Label><div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="john.doe@example.com" className="pl-10" /></div></div>
                                <div className="space-y-2"><Label htmlFor="phone">Phone <span className="text-gray-500">(Optional)</span></Label><div className="relative"><Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><Input id="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" className="pl-10"/></div></div>
                            </CardContent>
                        </Card>

                        {/* Section 2: Physical Parameters */}
                        <Card className="shadow-lg border-t-4 border-t-blue-500">
                            <CardHeader>
                                <div className="flex items-center space-x-3"><Ruler className="w-6 h-6 text-blue-500" /><CardTitle className="text-2xl font-bold">Physical Parameters</CardTitle></div>
                                <CardDescription>These metrics help us understand your physical health.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2"><Label htmlFor="height">Height (cm)</Label><Input id="height" type="number" value={formData.height} onChange={handleChange} placeholder="e.g., 175" required /></div>
                                <div className="space-y-2"><Label htmlFor="weight">Weight (kg)</Label><Input id="weight" type="number" value={formData.weight} onChange={handleChange} placeholder="e.g., 70" required /></div>
                                <div className="space-y-2 flex flex-col justify-end">
                                    <Label>Body Mass Index (BMI)</Label>
                                    <div className="flex items-center h-10 w-full rounded-md border border-input bg-gray-100 px-3 py-2 text-sm">
                                        {formData.bmi ? <><Weight className="w-4 h-4 mr-2 text-gray-600"/> {formData.bmi}</> : <span className="text-gray-500">Calculated automatically</span>}
                                    </div>
                                </div>
                                <div className="space-y-2"><Label htmlFor="bodyType">Body Type <span className="text-gray-500">(Optional)</span></Label><Select value={formData.bodyType} onValueChange={(value) => handleValueChange('bodyType', value)}><SelectTrigger><SelectValue placeholder="Select body type" /></SelectTrigger><SelectContent><SelectItem value="ectomorph">Ectomorph</SelectItem><SelectItem value="mesomorph">Mesomorph</SelectItem><SelectItem value="endomorph">Endomorph</SelectItem></SelectContent></Select></div>
                                <div className="space-y-2 md:col-span-2"><Label htmlFor="waistCircumference">Waist Circumference (cm) <span className="text-gray-500">(Optional)</span></Label><Input id="waistCircumference" type="number" value={formData.waistCircumference} onChange={handleChange} placeholder="For advanced health metrics" /></div>
                            </CardContent>
                        </Card>

                        {/* Section 3: Medical Information */}
                        <Card className="shadow-lg border-t-4 border-t-red-500">
                            <CardHeader>
                                <div className="flex items-center space-x-3"><HeartPulse className="w-6 h-6 text-red-500" /><CardTitle className="text-2xl font-bold">Medical Information</CardTitle></div>
                                <CardDescription>This sensitive data is crucial for accurate analysis.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <Alert variant="destructive" className="bg-red-50 border-red-200">
                                    <ShieldAlert className="h-4 w-4" /><AlertTitle className="font-semibold">Explicit Consent Required</AlertTitle><AlertDescription>By filling this section, you consent to providing sensitive medical data for analysis.</AlertDescription>
                                </Alert>
                                <div className="flex items-center space-x-2"><Checkbox id="consent" checked={formData.consent} onCheckedChange={(checked) => handleCheckedChange('consent', checked as boolean)} /><Label htmlFor="consent" className="font-normal text-sm text-gray-700 select-none">I consent to providing my medical information.</Label></div>
                                
                                <div className={`space-y-6 transition-opacity duration-300 ${formData.consent ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="space-y-2"><Label htmlFor="bloodPressure">Blood Pressure</Label><Input id="bloodPressure" value={formData.bloodPressure} onChange={handleChange} placeholder="e.g., 120/80" disabled={!formData.consent} /></div>
                                        <div className="space-y-2"><Label htmlFor="bloodSugar">Blood Sugar (mg/dL)</Label><Input id="bloodSugar" type="number" value={formData.bloodSugar} onChange={handleChange} placeholder="e.g., 90" disabled={!formData.consent} /></div>
                                        <div className="space-y-2"><Label htmlFor="cholesterol">Cholesterol (mg/dL)</Label><Input id="cholesterol" type="number" value={formData.cholesterol} onChange={handleChange} placeholder="Total Cholesterol" disabled={!formData.consent} /></div>
                                    </div>
                                    <div className="space-y-4">
                                        <Label>Chronic Conditions (Select all that apply)</Label>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {['Diabetes', 'Hypertension', 'Thyroid issues', 'Asthma', 'PCOS/PCOD', 'Heart conditions', 'Arthritis'].map(condition => (
                                                <div key={condition} className="flex items-center space-x-2"><Checkbox id={condition} checked={formData.conditions.includes(condition)} onCheckedChange={(checked) => handleCheckboxGroupChange(condition, checked as boolean)} disabled={!formData.consent} /><Label htmlFor={condition} className="font-normal">{condition}</Label></div>
                                            ))}
                                        </div>
                                        <div className="space-y-2 pt-2"><Label htmlFor="otherConditions">Other Conditions</Label><Input id="otherConditions" value={formData.otherConditions} onChange={handleChange} placeholder="Specify any other conditions" disabled={!formData.consent} /></div>
                                    </div>
                                    <Separator />
                                    <div className="space-y-2"><Label htmlFor="allergiesMedications">Known Allergies & Current Medications</Label><Textarea id="allergiesMedications" value={formData.allergiesMedications} onChange={handleChange} placeholder="List any known allergies, current medications, and dosages..." rows={3} disabled={!formData.consent} /></div>
                                    <div className="space-y-2"><Label htmlFor="surgeries">Recent Surgeries or Medical Events</Label><Textarea id="surgeries" value={formData.surgeries} onChange={handleChange} placeholder="Describe any recent procedures or significant events..." rows={3} disabled={!formData.consent} /></div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Section 4: Lifestyle Information */}
                        <Card className="shadow-lg border-t-4 border-t-green-500">
                            <CardHeader>
                                <div className="flex items-center space-x-3"><Leaf className="w-6 h-6 text-green-500" /><CardTitle className="text-2xl font-bold">Lifestyle Information</CardTitle></div>
                                <CardDescription>Your daily habits are important health indicators.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3"><Label>Activity Level</Label><RadioGroup value={formData.activityLevel} onValueChange={(value) => handleValueChange('activityLevel', value)} className="space-y-2">{['Sedentary', 'Lightly active', 'Moderately active', 'Very active', 'Athlete'].map(level => (<div key={level} className="flex items-center space-x-2"><RadioGroupItem value={level.toLowerCase().replace(' ', '-')} id={level} /><Label htmlFor={level} className="font-normal">{level}</Label></div>))}</RadioGroup></div>
                                <div className="space-y-6">
                                    <div className="space-y-2"><Label htmlFor="dietaryPreference">Dietary Preference</Label><Select value={formData.dietaryPreference} onValueChange={(value) => handleValueChange('dietaryPreference', value)}><SelectTrigger><SelectValue placeholder="Select your primary diet" /></SelectTrigger><SelectContent><SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem><SelectItem value="vegetarian">Vegetarian</SelectItem><SelectItem value="vegan">Vegan</SelectItem><SelectItem value="keto">Keto / Low-carb</SelectItem><SelectItem value="gluten-free">Gluten-free / Dairy-free</SelectItem></SelectContent></Select></div>
                                    <div className="space-y-2"><Label htmlFor="sleep">Average Sleep (hours per night)</Label><Input id="sleep" type="number" value={formData.sleep} onChange={handleChange} placeholder="e.g., 8" /></div>
                                </div>
                                <div className="space-y-3"><Label>Smoking Habit</Label><RadioGroup value={formData.smoking} onValueChange={(value) => handleValueChange('smoking', value)} className="space-y-2">{['Non-smoker', 'Former smoker', 'Occasional', 'Daily'].map(habit => (<div key={habit} className="flex items-center space-x-2"><RadioGroupItem value={habit.toLowerCase().replace(' ', '-')} id={habit} /><Label htmlFor={habit} className="font-normal">{habit}</Label></div>))}</RadioGroup></div>
                                <div className="space-y-3"><Label>Alcohol Consumption</Label><RadioGroup value={formData.alcohol} onValueChange={(value) => handleValueChange('alcohol', value)} className="space-y-2">{['None', 'Socially / Occasionally', 'Regularly (2-3/week)', 'Frequently (4+/week)'].map(level => (<div key={level} className="flex items-center space-x-2"><RadioGroupItem value={level.toLowerCase().split(' ')[0]} id={level} /><Label htmlFor={level} className="font-normal">{level}</Label></div>))}</RadioGroup></div>
                            </CardContent>
                        </Card>

                        <div className="flex justify-end pt-6">
                            <Button type="submit" size="lg" className="bg-health-primary hover:bg-health-primary/90 w-full md:w-auto text-lg">
                                Review My Details
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserInput;