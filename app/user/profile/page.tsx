import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserProfile = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
        <p className="text-gray-600">Manage your personal information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Picture & Basic Info */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <Avatar className="w-32 h-32">
              <AvatarImage src="" />
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>
            <Button variant="outline">Change Photo</Button>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="John" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Doe" />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue="john.doe@university.edu"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" defaultValue="+44 7123 456789" />
            </div>

            <div>
              <Label htmlFor="address">Current Address</Label>
              <Textarea
                id="address"
                defaultValue="123 Student Street, Oxford, UK"
              />
            </div>
          </CardContent>
        </Card>

        {/* University Information */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>University Information</CardTitle>
            <CardDescription>Your academic details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="university">University</Label>
                <Input id="university" defaultValue="University of Oxford" />
              </div>
              <div>
                <Label htmlFor="course">Course of Study</Label>
                <Input id="course" defaultValue="Computer Science" />
              </div>
              <div>
                <Label htmlFor="year">Year of Study</Label>
                <Input id="year" defaultValue="2nd Year" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="studentId">Student ID</Label>
                <Input id="studentId" defaultValue="OX123456" />
              </div>
              <div>
                <Label htmlFor="graduation">Expected Graduation</Label>
                <Input id="graduation" defaultValue="June 2026" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Emergency Contact</CardTitle>
            <CardDescription>
              Contact information for emergencies
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="emergencyName">Contact Name</Label>
                <Input id="emergencyName" defaultValue="Jane Doe" />
              </div>
              <div>
                <Label htmlFor="emergencyPhone">Phone Number</Label>
                <Input id="emergencyPhone" defaultValue="+44 7987 654321" />
              </div>
              <div>
                <Label htmlFor="emergencyRelation">Relationship</Label>
                <Input id="emergencyRelation" defaultValue="Mother" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default UserProfile;
