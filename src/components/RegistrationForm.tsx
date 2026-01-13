import { useState } from "react";
import { X, Upload, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs.config";

interface RegistrationFormProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    // Step 1: Personal Identification
    driverName: string;
    driverEmail: string;
    driverPhone: string;
    coDriverName: string;
    coDriverEmail: string;
    coDriverPhone: string;
    driverIdFile: File | null;
    coDriverIdFile: File | null;
    residencyProof: File | null;
    emergencyContactName: string;
    emergencyContactPhone: string;

    // Step 2: Driver Qualifications
    licenseNumber: string;
    licenseExpiry: string;
    licenseFile: File | null;
    drivingExperience: string;

    // Step 3: Vehicle Documentation
    vehicleMake: string;
    vehicleModel: string;
    vehicleYear: string;
    engineCapacity: string;
    logbookFile: File | null;
    insuranceFile: File | null;
    vehiclePhotoFront: File | null;
    vehiclePhotoBack: File | null;
    vehiclePhotoLeft: File | null;
    vehiclePhotoRight: File | null;

    // Step 4: Hospitality & Health
    driverDietaryReqs: string;
    coDriverDietaryReqs: string;
    allergies: string;
    medicalConditions: string;
    specialAccommodations: string;

    // Step 5: Branding & Personalization
    driverJacketSize: string;
    coDriverJacketSize: string;
    driverShirtSize: string;
    coDriverShirtSize: string;
    instagramHandle: string;
    twitterHandle: string;
    logoFile: File | null;
}

const initialFormData: FormData = {
    driverName: "",
    driverEmail: "",
    driverPhone: "",
    coDriverName: "",
    coDriverEmail: "",
    coDriverPhone: "",
    driverIdFile: null,
    coDriverIdFile: null,
    residencyProof: null,
    emergencyContactName: "",
    emergencyContactPhone: "",
    licenseNumber: "",
    licenseExpiry: "",
    licenseFile: null,
    drivingExperience: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    engineCapacity: "",
    logbookFile: null,
    insuranceFile: null,
    vehiclePhotoFront: null,
    vehiclePhotoBack: null,
    vehiclePhotoLeft: null,
    vehiclePhotoRight: null,
    driverDietaryReqs: "",
    coDriverDietaryReqs: "",
    allergies: "",
    medicalConditions: "",
    specialAccommodations: "",
    driverJacketSize: "",
    coDriverJacketSize: "",
    driverShirtSize: "",
    coDriverShirtSize: "",
    instagramHandle: "",
    twitterHandle: "",
    logoFile: null,
};

export function RegistrationForm({ isOpen, onClose }: RegistrationFormProps) {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const totalSteps = 5;

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleFileChange = (field: keyof FormData, file: File | null) => {
        setFormData(prev => ({ ...prev, [field]: file }));
    };

    const convertFileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });
    };

    const validateStep = (step: number): boolean => {
        switch (step) {
            case 1:
                if (!formData.driverName || !formData.driverEmail || !formData.driverPhone ||
                    !formData.coDriverName || !formData.coDriverEmail || !formData.coDriverPhone ||
                    !formData.emergencyContactName || !formData.emergencyContactPhone) {
                    toast({
                        title: "Missing Information",
                        description: "Please fill in all required fields for personal identification.",
                        variant: "destructive",
                    });
                    return false;
                }
                break;
            case 2:
                if (!formData.licenseNumber || !formData.licenseExpiry || !formData.drivingExperience) {
                    toast({
                        title: "Missing Information",
                        description: "Please fill in all driver qualification fields.",
                        variant: "destructive",
                    });
                    return false;
                }
                break;
            case 3:
                if (!formData.vehicleMake || !formData.vehicleModel || !formData.vehicleYear || !formData.engineCapacity) {
                    toast({
                        title: "Missing Information",
                        description: "Please fill in all vehicle documentation fields.",
                        variant: "destructive",
                    });
                    return false;
                }
                if (parseInt(formData.engineCapacity) < 300) {
                    toast({
                        title: "Vehicle Requirements",
                        description: "Vehicle must have at least 300 horsepower.",
                        variant: "destructive",
                    });
                    return false;
                }
                break;
            case 4:
                // Optional fields, no validation needed
                break;
            case 5:
                if (!formData.driverJacketSize || !formData.coDriverJacketSize ||
                    !formData.driverShirtSize || !formData.coDriverShirtSize) {
                    toast({
                        title: "Missing Information",
                        description: "Please provide apparel sizes for both driver and co-driver.",
                        variant: "destructive",
                    });
                    return false;
                }
                break;
        }
        return true;
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, totalSteps));
        }
    };

    const handleBack = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const handleSubmit = async () => {
        if (!validateStep(currentStep)) return;

        setIsSubmitting(true);

        try {
            // Convert files to base64
            const attachments: any[] = [];

            const fileFields: (keyof FormData)[] = [
                'driverIdFile', 'coDriverIdFile', 'residencyProof', 'licenseFile',
                'logbookFile', 'insuranceFile', 'vehiclePhotoFront', 'vehiclePhotoBack',
                'vehiclePhotoLeft', 'vehiclePhotoRight', 'logoFile'
            ];

            for (const field of fileFields) {
                const file = formData[field] as File | null;
                if (file) {
                    const base64 = await convertFileToBase64(file);
                    attachments.push({
                        name: file.name,
                        data: base64.split(',')[1], // Remove data:image/png;base64, prefix
                    });
                }
            }

            // Prepare email template parameters
            const templateParams = {
                driver_name: formData.driverName,
                driver_email: formData.driverEmail,
                driver_phone: formData.driverPhone,
                codriver_name: formData.coDriverName,
                codriver_email: formData.coDriverEmail,
                codriver_phone: formData.coDriverPhone,
                emergency_contact_name: formData.emergencyContactName,
                emergency_contact_phone: formData.emergencyContactPhone,
                license_number: formData.licenseNumber,
                license_expiry: formData.licenseExpiry,
                driving_experience: formData.drivingExperience,
                vehicle_make: formData.vehicleMake,
                vehicle_model: formData.vehicleModel,
                vehicle_year: formData.vehicleYear,
                engine_capacity: formData.engineCapacity,
                driver_dietary: formData.driverDietaryReqs || "None",
                codriver_dietary: formData.coDriverDietaryReqs || "None",
                allergies: formData.allergies || "None",
                medical_conditions: formData.medicalConditions || "None",
                special_accommodations: formData.specialAccommodations || "None",
                driver_jacket_size: formData.driverJacketSize,
                codriver_jacket_size: formData.coDriverJacketSize,
                driver_shirt_size: formData.driverShirtSize,
                codriver_shirt_size: formData.coDriverShirtSize,
                instagram_handle: formData.instagramHandle || "N/A",
                twitter_handle: formData.twitterHandle || "N/A",
                to_email: "roynthiga9@gmail.com",
                from_email: "cradlerunafrica@outlook.com",
            };

            // Send email using EmailJS
            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams,
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            toast({
                title: "Registration Successful!",
                description: "Your registration has been submitted. We'll contact you soon.",
            });

            // Reset form and close
            setFormData(initialFormData);
            setCurrentStep(1);
            onClose();
        } catch (error) {
            console.error('Error submitting form:', error);
            toast({
                title: "Submission Failed",
                description: "There was an error submitting your registration. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderFileUpload = (
        label: string,
        field: keyof FormData,
        accept: string = "image/*,.pdf",
        required: boolean = false
    ) => {
        const file = formData[field] as File | null;

        return (
            <div className="space-y-2">
                <Label className="text-white">
                    {label} {required && <span className="text-primary">*</span>}
                </Label>
                <div className="relative">
                    <Input
                        type="file"
                        accept={accept}
                        onChange={(e) => handleFileChange(field, e.target.files?.[0] || null)}
                        className="hidden"
                        id={field}
                    />
                    <label
                        htmlFor={field}
                        className="flex items-center justify-center gap-2 px-4 py-3 border border-primary/30 rounded-md cursor-pointer hover:border-primary transition-colors bg-card"
                    >
                        <Upload className="w-4 h-4 text-primary" />
                        <span className="text-sm text-white/70">
                            {file ? file.name : "Choose file..."}
                        </span>
                    </label>
                </div>
            </div>
        );
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-6">
                        <h3 className="text-xl font-bebas text-primary">Personal Identification & Travel Documents</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-white">Driver Full Name *</Label>
                                <Input
                                    value={formData.driverName}
                                    onChange={(e) => handleInputChange('driverName', e.target.value)}
                                    placeholder="John Doe"
                                    className="bg-card border-primary/30 text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-white">Driver Email *</Label>
                                <Input
                                    type="email"
                                    value={formData.driverEmail}
                                    onChange={(e) => handleInputChange('driverEmail', e.target.value)}
                                    placeholder="john@example.com"
                                    className="bg-card border-primary/30 text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-white">Driver Phone *</Label>
                                <Input
                                    value={formData.driverPhone}
                                    onChange={(e) => handleInputChange('driverPhone', e.target.value)}
                                    placeholder="+254 700 000 000"
                                    className="bg-card border-primary/30 text-white"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            <div className="space-y-2">
                                <Label className="text-white">Co-Driver Full Name *</Label>
                                <Input
                                    value={formData.coDriverName}
                                    onChange={(e) => handleInputChange('coDriverName', e.target.value)}
                                    placeholder="Jane Doe"
                                    className="bg-card border-primary/30 text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-white">Co-Driver Email *</Label>
                                <Input
                                    type="email"
                                    value={formData.coDriverEmail}
                                    onChange={(e) => handleInputChange('coDriverEmail', e.target.value)}
                                    placeholder="jane@example.com"
                                    className="bg-card border-primary/30 text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-white">Co-Driver Phone *</Label>
                                <Input
                                    value={formData.coDriverPhone}
                                    onChange={(e) => handleInputChange('coDriverPhone', e.target.value)}
                                    placeholder="+254 700 000 000"
                                    className="bg-card border-primary/30 text-white"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            {renderFileUpload("Driver ID/Passport", "driverIdFile", "image/*,.pdf", true)}
                            {renderFileUpload("Co-Driver ID/Passport", "coDriverIdFile", "image/*,.pdf", true)}
                            {renderFileUpload("Residency Proof (Non-Kenyans)", "residencyProof", "image/*,.pdf")}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            <div className="space-y-2">
                                <Label className="text-white">Emergency Contact Name *</Label>
                                <Input
                                    value={formData.emergencyContactName}
                                    onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
                                    placeholder="Emergency Contact"
                                    className="bg-card border-primary/30 text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-white">Emergency Contact Phone *</Label>
                                <Input
                                    value={formData.emergencyContactPhone}
                                    onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)}
                                    placeholder="+254 700 000 000"
                                    className="bg-card border-primary/30 text-white"
                                />
                            </div>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-6">
                        <h3 className="text-xl font-bebas text-primary">Driver Qualifications</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-white">License Number *</Label>
                                <Input
                                    value={formData.licenseNumber}
                                    onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                                    placeholder="DL123456"
                                    className="bg-card border-primary/30 text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-white">License Expiry Date *</Label>
                                <Input
                                    type="date"
                                    value={formData.licenseExpiry}
                                    onChange={(e) => handleInputChange('licenseExpiry', e.target.value)}
                                    className="bg-card border-primary/30 text-white"
                                />
                            </div>
                        </div>

                        {renderFileUpload("Driving License", "licenseFile", "image/*,.pdf", true)}

                        <div className="space-y-2">
                            <Label className="text-white">Performance Driving Experience *</Label>
                            <Textarea
                                value={formData.drivingExperience}
                                onChange={(e) => handleInputChange('drivingExperience', e.target.value)}
                                placeholder="Describe your experience with high-performance vehicles, track days, rallies, etc."
                                rows={4}
                                className="bg-card border-primary/30 text-white"
                            />
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-6">
                        <h3 className="text-xl font-bebas text-primary">Vehicle Documentation</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-white">Vehicle Make *</Label>
                                <Input
                                    value={formData.vehicleMake}
                                    onChange={(e) => handleInputChange('vehicleMake', e.target.value)}
                                    placeholder="Porsche, BMW, Mercedes, etc."
                                    className="bg-card border-primary/30 text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-white">Vehicle Model *</Label>
                                <Input
                                    value={formData.vehicleModel}
                                    onChange={(e) => handleInputChange('vehicleModel', e.target.value)}
                                    placeholder="911, M5, AMG GT, etc."
                                    className="bg-card border-primary/30 text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-white">Year *</Label>
                                <Input
                                    value={formData.vehicleYear}
                                    onChange={(e) => handleInputChange('vehicleYear', e.target.value)}
                                    placeholder="2020"
                                    className="bg-card border-primary/30 text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-white">Engine Capacity (HP) *</Label>
                                <Input
                                    type="number"
                                    value={formData.engineCapacity}
                                    onChange={(e) => handleInputChange('engineCapacity', e.target.value)}
                                    placeholder="300+ HP required"
                                    min="300"
                                    className="bg-card border-primary/30 text-white"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {renderFileUpload("Vehicle Logbook", "logbookFile", "image/*,.pdf", true)}
                            {renderFileUpload("Insurance Certificate", "insuranceFile", "image/*,.pdf", true)}
                        </div>

                        <div className="space-y-2">
                            <Label className="text-white">Vehicle Photos (4 angles) *</Label>
                            <div className="grid grid-cols-2 gap-4">
                                {renderFileUpload("Front", "vehiclePhotoFront", "image/*", true)}
                                {renderFileUpload("Back", "vehiclePhotoBack", "image/*", true)}
                                {renderFileUpload("Left Side", "vehiclePhotoLeft", "image/*", true)}
                                {renderFileUpload("Right Side", "vehiclePhotoRight", "image/*", true)}
                            </div>
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className="space-y-6">
                        <h3 className="text-xl font-bebas text-primary">Hospitality & Health</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-white">Driver Dietary Requirements</Label>
                                <Textarea
                                    value={formData.driverDietaryReqs}
                                    onChange={(e) => handleInputChange('driverDietaryReqs', e.target.value)}
                                    placeholder="Vegetarian, Vegan, Halal, etc."
                                    rows={3}
                                    className="bg-card border-primary/30 text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-white">Co-Driver Dietary Requirements</Label>
                                <Textarea
                                    value={formData.coDriverDietaryReqs}
                                    onChange={(e) => handleInputChange('coDriverDietaryReqs', e.target.value)}
                                    placeholder="Vegetarian, Vegan, Halal, etc."
                                    rows={3}
                                    className="bg-card border-primary/30 text-white"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label className="text-white">Allergies</Label>
                            <Textarea
                                value={formData.allergies}
                                onChange={(e) => handleInputChange('allergies', e.target.value)}
                                placeholder="List any food or environmental allergies"
                                rows={3}
                                className="bg-card border-primary/30 text-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="text-white">Medical Conditions</Label>
                            <Textarea
                                value={formData.medicalConditions}
                                onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                                placeholder="Any medical conditions our EMT team should be aware of"
                                rows={3}
                                className="bg-card border-primary/30 text-white"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="text-white">Special Accommodations</Label>
                            <Textarea
                                value={formData.specialAccommodations}
                                onChange={(e) => handleInputChange('specialAccommodations', e.target.value)}
                                placeholder="Any special requests for lodging or activities"
                                rows={3}
                                className="bg-card border-primary/30 text-white"
                            />
                        </div>
                    </div>
                );

            case 5:
                return (
                    <div className="space-y-6">
                        <h3 className="text-xl font-bebas text-primary">Branding & Personalization</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-white">Driver Jacket Size *</Label>
                                <select
                                    value={formData.driverJacketSize}
                                    onChange={(e) => handleInputChange('driverJacketSize', e.target.value)}
                                    className="w-full px-3 py-2 bg-card border border-primary/30 rounded-md text-white"
                                >
                                    <option value="">Select size</option>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                    <option value="XXXL">XXXL</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-white">Co-Driver Jacket Size *</Label>
                                <select
                                    value={formData.coDriverJacketSize}
                                    onChange={(e) => handleInputChange('coDriverJacketSize', e.target.value)}
                                    className="w-full px-3 py-2 bg-card border border-primary/30 rounded-md text-white"
                                >
                                    <option value="">Select size</option>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                    <option value="XXXL">XXXL</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-white">Driver Shirt Size *</Label>
                                <select
                                    value={formData.driverShirtSize}
                                    onChange={(e) => handleInputChange('driverShirtSize', e.target.value)}
                                    className="w-full px-3 py-2 bg-card border border-primary/30 rounded-md text-white"
                                >
                                    <option value="">Select size</option>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                    <option value="XXXL">XXXL</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-white">Co-Driver Shirt Size *</Label>
                                <select
                                    value={formData.coDriverShirtSize}
                                    onChange={(e) => handleInputChange('coDriverShirtSize', e.target.value)}
                                    className="w-full px-3 py-2 bg-card border border-primary/30 rounded-md text-white"
                                >
                                    <option value="">Select size</option>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                    <option value="XXXL">XXXL</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-white">Instagram Handle</Label>
                                <Input
                                    value={formData.instagramHandle}
                                    onChange={(e) => handleInputChange('instagramHandle', e.target.value)}
                                    placeholder="@yourhandle"
                                    className="bg-card border-primary/30 text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-white">Twitter/X Handle</Label>
                                <Input
                                    value={formData.twitterHandle}
                                    onChange={(e) => handleInputChange('twitterHandle', e.target.value)}
                                    placeholder="@yourhandle"
                                    className="bg-card border-primary/30 text-white"
                                />
                            </div>
                        </div>

                        {renderFileUpload("Personal/Business Logo (Optional)", "logoFile", "image/*")}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="w-[95vw] max-w-[95vw] md:max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-primary/30 p-4 md:p-6">
                <DialogHeader>
                    <DialogTitle className="text-3xl font-bebas text-primary text-center">
                        CRADLE RUN 2026 REGISTRATION
                    </DialogTitle>
                </DialogHeader>

                {/* Progress Indicator - Mobile */}
                <div className="md:hidden mb-6">
                    <div className="flex justify-between items-end mb-2">
                        <span className="font-bebas text-xl text-primary">
                            Step {currentStep}
                        </span>
                        <span className="text-xs text-white/50 uppercase tracking-widest">
                            of {totalSteps}
                        </span>
                    </div>
                    <div className="w-full bg-primary/10 h-1.5 rounded-full overflow-hidden">
                        <div
                            className="bg-primary h-full rounded-full transition-all duration-300"
                            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Progress Indicator - Desktop */}
                <div className="hidden md:flex items-center justify-between mb-8">
                    {[1, 2, 3, 4, 5].map((step) => (
                        <div key={step} className="flex items-center">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-bebas text-lg transition-colors ${step < currentStep
                                    ? "bg-primary text-white"
                                    : step === currentStep
                                        ? "bg-primary text-white ring-4 ring-primary/30"
                                        : "bg-card border-2 border-primary/30 text-white/50"
                                    }`}
                            >
                                {step < currentStep ? <Check className="w-5 h-5" /> : step}
                            </div>
                            {step < 5 && (
                                <div
                                    className={`w-12 h-1 mx-2 ${step < currentStep ? "bg-primary" : "bg-primary/20"
                                        }`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Form Content */}
                <div className="min-h-[400px]">{renderStep()}</div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-primary/20">
                    <Button
                        onClick={handleBack}
                        disabled={currentStep === 1}
                        variant="outline"
                        className="border-primary/30 text-white hover:bg-primary/10"
                    >
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Back
                    </Button>

                    {currentStep < totalSteps ? (
                        <Button
                            onClick={handleNext}
                            className="bg-primary hover:bg-primary/90 text-white"
                        >
                            Next
                            <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                    ) : (
                        <Button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="bg-primary hover:bg-primary/90 text-white px-8"
                        >
                            {isSubmitting ? "Submitting..." : "Submit Registration"}
                        </Button>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
