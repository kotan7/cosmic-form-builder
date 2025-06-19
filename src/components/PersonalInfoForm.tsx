
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, User, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    file: null as File | null
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Information Submitted",
      description: "Your personal information has been successfully submitted!",
    });
    console.log('Form data:', formData);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl font-bold text-gray-800">Personal Information</CardTitle>
          <CardDescription className="text-gray-600">
            Please fill in your details below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <User size={16} />
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="h-12 text-base border-gray-300 focus:border-lime-500 focus:ring-lime-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <FileText size={16} />
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="h-12 text-base border-gray-300 focus:border-lime-500 focus:ring-lime-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="file" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Upload size={16} />
                Upload Document
              </Label>
              <div className="relative">
                <Input
                  id="file"
                  name="file"
                  type="file"
                  onChange={handleFileChange}
                  className="h-12 text-base border-gray-300 focus:border-lime-500 focus:ring-lime-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-lime-50 file:text-lime-700 hover:file:bg-lime-100"
                  accept="image/*,.pdf,.doc,.docx"
                />
                {formData.file && (
                  <p className="text-xs text-gray-500 mt-1">
                    Selected: {formData.file.name}
                  </p>
                )}
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-base font-medium bg-lime-600 hover:bg-lime-700 text-white transition-colors duration-200"
            >
              Submit Information
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalInfoForm;
