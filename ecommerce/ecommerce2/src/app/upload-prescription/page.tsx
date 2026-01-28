'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import {
  Upload,
  Camera,
  FileText,
  Check,
  ChevronRight,
  Shield,
  Clock,
  Info,
  X,
  Image as ImageIcon,
  AlertCircle,
} from 'lucide-react';
import { ClientLayout } from '@/components/ClientLayout';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';

type Step = 'upload' | 'review' | 'details' | 'confirmation';

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  preview: string;
}

export default function UploadPrescriptionPage() {
  const [currentStep, setCurrentStep] = useState<Step>('upload');
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const steps = [
    { id: 'upload', label: 'Upload', icon: Upload },
    { id: 'review', label: 'Review', icon: FileText },
    { id: 'details', label: 'Details', icon: Check },
    { id: 'confirmation', label: 'Done', icon: Check },
  ];

  const currentStepIndex = steps.findIndex((s) => s.id === currentStep);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Simulate file upload
    const newFile: UploadedFile = {
      id: Date.now().toString(),
      name: 'prescription.jpg',
      size: '1.2 MB',
      preview: '',
    };
    setUploadedFiles((prev) => [...prev, newFile]);
  }, []);

  const handleFileSelect = () => {
    // Simulate file selection
    const newFile: UploadedFile = {
      id: Date.now().toString(),
      name: `prescription_${uploadedFiles.length + 1}.jpg`,
      size: '1.2 MB',
      preview: '',
    };
    setUploadedFiles((prev) => [...prev, newFile]);
  };

  const removeFile = (id: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleNext = () => {
    const stepOrder: Step[] = ['upload', 'review', 'details', 'confirmation'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const stepOrder: Step[] = ['upload', 'review', 'details', 'confirmation'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  return (
    <ClientLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-2">
            Upload Prescription
          </h1>
          <p className="text-clinical-600">
            Upload a valid prescription to order medicines
          </p>
        </div>

        {/* Steps indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            {steps.map((step, index) => {
              const isCompleted = index < currentStepIndex;
              const isCurrent = index === currentStepIndex;

              return (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        'w-10 h-10 rounded-full flex items-center justify-center transition-colors',
                        isCompleted
                          ? 'bg-teal-600 text-white'
                          : isCurrent
                          ? 'bg-navy-800 text-white'
                          : 'bg-clinical-200 text-clinical-500'
                      )}
                    >
                      {isCompleted ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <step.icon className="w-5 h-5" />
                      )}
                    </div>
                    <span
                      className={cn(
                        'text-xs mt-2 font-medium',
                        isCurrent ? 'text-navy-900' : 'text-clinical-500'
                      )}
                    >
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={cn(
                        'w-16 md:w-24 h-0.5 mx-2 mt-[-1.25rem]',
                        index < currentStepIndex ? 'bg-teal-600' : 'bg-clinical-200'
                      )}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Step 1: Upload */}
          {currentStep === 'upload' && (
            <Card padding="lg">
              {/* Upload area */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={cn(
                  'relative border-2 border-dashed rounded-2xl p-8 text-center transition-all',
                  isDragging
                    ? 'border-teal-500 bg-teal-50'
                    : 'border-clinical-200 hover:border-clinical-300'
                )}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-100 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  Drag and drop your prescription
                </h3>
                <p className="text-clinical-500 mb-4">or</p>
                <div className="flex justify-center gap-3">
                  <Button onClick={handleFileSelect}>
                    <Upload className="w-4 h-4 mr-2" />
                    Browse Files
                  </Button>
                  <Button variant="outline" onClick={handleFileSelect}>
                    <Camera className="w-4 h-4 mr-2" />
                    Take Photo
                  </Button>
                </div>
                <p className="text-sm text-clinical-500 mt-4">
                  Supported formats: JPG, PNG, PDF (max 10MB)
                </p>
              </div>

              {/* Uploaded files */}
              {uploadedFiles.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-medium text-navy-900 mb-3">Uploaded Files</h4>
                  <div className="space-y-2">
                    {uploadedFiles.map((file) => (
                      <div
                        key={file.id}
                        className="flex items-center justify-between p-3 bg-clinical-50 rounded-xl"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                            <ImageIcon className="w-5 h-5 text-teal-600" />
                          </div>
                          <div>
                            <p className="font-medium text-navy-900">{file.name}</p>
                            <p className="text-xs text-clinical-500">{file.size}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFile(file.id)}
                          className="p-2 text-clinical-500 hover:text-error rounded-lg hover:bg-error/10 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Guidelines */}
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <h4 className="font-medium text-amber-800 mb-2 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Prescription Guidelines
                </h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Prescription should be less than 6 months old</li>
                  <li>• Doctor&apos;s name and signature must be visible</li>
                  <li>• Patient name and date should be clearly readable</li>
                  <li>• All prescribed medicines should be visible</li>
                </ul>
              </div>

              {/* Actions */}
              <div className="mt-6 flex justify-end">
                <Button
                  onClick={handleNext}
                  disabled={uploadedFiles.length === 0}
                  rightIcon={<ChevronRight className="w-4 h-4" />}
                >
                  Continue
                </Button>
              </div>
            </Card>
          )}

          {/* Step 2: Review */}
          {currentStep === 'review' && (
            <Card padding="lg">
              <h3 className="text-lg font-semibold text-navy-900 mb-4">
                Review Your Prescription
              </h3>

              {/* Preview area */}
              <div className="bg-clinical-100 rounded-2xl p-8 text-center mb-6">
                <ImageIcon className="w-24 h-24 mx-auto text-clinical-300 mb-4" />
                <p className="text-clinical-600">Prescription preview</p>
              </div>

              {/* Verification note */}
              <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl mb-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-teal-800">Verification Process</p>
                    <p className="text-sm text-teal-600 mt-1">
                      Our licensed pharmacist will verify your prescription within 30 minutes
                      during business hours. You&apos;ll receive a notification once verified.
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button onClick={handleNext} rightIcon={<ChevronRight className="w-4 h-4" />}>
                  Continue
                </Button>
              </div>
            </Card>
          )}

          {/* Step 3: Delivery Details */}
          {currentStep === 'details' && (
            <Card padding="lg">
              <h3 className="text-lg font-semibold text-navy-900 mb-4">
                Delivery Details
              </h3>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input label="Full Name" placeholder="Enter your full name" />
                  <Input label="Phone Number" placeholder="Enter phone number" type="tel" />
                </div>
                <Input label="Address Line 1" placeholder="House/Flat number, Building name" />
                <Input label="Address Line 2" placeholder="Street, Area, Landmark" />
                <div className="grid md:grid-cols-3 gap-4">
                  <Input label="City" placeholder="City" />
                  <Input label="State" placeholder="State" />
                  <Input label="PIN Code" placeholder="PIN Code" />
                </div>
              </div>

              {/* Delivery note */}
              <div className="mt-6 p-4 bg-clinical-50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-clinical-500" />
                  <span className="font-medium text-navy-900">Delivery Time</span>
                </div>
                <p className="text-sm text-clinical-600">
                  Once your prescription is verified, your order will be delivered within 24-48 hours.
                </p>
              </div>

              {/* Actions */}
              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button onClick={handleNext} rightIcon={<ChevronRight className="w-4 h-4" />}>
                  Submit Prescription
                </Button>
              </div>
            </Card>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 'confirmation' && (
            <Card padding="lg" className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
                <Check className="w-10 h-10 text-success" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-2">
                Prescription Submitted!
              </h3>
              <p className="text-clinical-600 mb-6 max-w-md mx-auto">
                Your prescription has been submitted successfully. Our pharmacist will verify it
                and you&apos;ll receive a notification shortly.
              </p>

              <div className="p-4 bg-clinical-50 rounded-xl mb-6 max-w-sm mx-auto">
                <p className="text-sm text-clinical-600">
                  <strong className="text-navy-900">Reference ID:</strong> RX-2024-001234
                </p>
              </div>

              {/* What happens next */}
              <div className="text-left max-w-md mx-auto mb-6">
                <h4 className="font-medium text-navy-900 mb-3">What happens next?</h4>
                <div className="space-y-3">
                  {[
                    { icon: Shield, text: 'Pharmacist verifies your prescription' },
                    { icon: FileText, text: 'We prepare your order with verified medicines' },
                    { icon: Clock, text: 'Delivery within 24-48 hours after verification' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-teal-600" />
                      </div>
                      <span className="text-clinical-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/">
                  <Button variant="outline">Continue Shopping</Button>
                </Link>
                <Link href="/account/prescriptions">
                  <Button>View My Prescriptions</Button>
                </Link>
              </div>
            </Card>
          )}
        </div>

        {/* Trust badges */}
        {currentStep === 'upload' && (
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-clinical-100">
              <Shield className="w-8 h-8 text-teal-600" />
              <div>
                <p className="font-medium text-navy-900">100% Secure</p>
                <p className="text-sm text-clinical-500">Your data is encrypted</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-clinical-100">
              <FileText className="w-8 h-8 text-teal-600" />
              <div>
                <p className="font-medium text-navy-900">Licensed Pharmacy</p>
                <p className="text-sm text-clinical-500">Verified by pharmacists</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-clinical-100">
              <Clock className="w-8 h-8 text-teal-600" />
              <div>
                <p className="font-medium text-navy-900">Quick Verification</p>
                <p className="text-sm text-clinical-500">Usually within 30 mins</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </ClientLayout>
  );
}
