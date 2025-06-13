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
import { Switch } from "@/components/ui/switch";

const VendorSettings = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">
            Manage your account and business preferences
          </p>
        </div>
      </div>

      {/* Company Information */}
      <Card>
        <CardHeader>
          <CardTitle>Company Information</CardTitle>
          <CardDescription>
            Update your business details and contact information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="companyName">Company Name</Label>
              <Input id="companyName" defaultValue="Metro Housing Ltd" />
            </div>
            <div>
              <Label htmlFor="companyReg">Company Registration</Label>
              <Input id="companyReg" defaultValue="12345678" />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                defaultValue="contact@metrohousing.com"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" defaultValue="+44 20 7123 4567" />
            </div>
          </div>
          <div>
            <Label htmlFor="address">Business Address</Label>
            <Input
              id="address"
              defaultValue="25 Business Park, London, E14 5AB"
            />
          </div>
          <div>
            <Label htmlFor="website">Website</Label>
            <Input id="website" defaultValue="www.metrohousing.com" />
          </div>
          <div>
            <Label htmlFor="description">Company Description</Label>
            <Textarea
              id="description"
              defaultValue="Premium student accommodation provider with modern facilities and excellent support services."
              className="min-h-[100px]"
            />
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Save Changes
          </Button>
        </CardContent>
      </Card>

      {/* Banking Information */}
      <Card>
        <CardHeader>
          <CardTitle>Banking Information</CardTitle>
          <CardDescription>
            Manage your payment and banking details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="bankName">Bank Name</Label>
              <Input id="bankName" defaultValue="Barclays Bank PLC" />
            </div>
            <div>
              <Label htmlFor="accountName">Account Name</Label>
              <Input id="accountName" defaultValue="Metro Housing Ltd" />
            </div>
            <div>
              <Label htmlFor="accountNumber">Account Number</Label>
              <Input id="accountNumber" defaultValue="****1234" />
            </div>
            <div>
              <Label htmlFor="sortCode">Sort Code</Label>
              <Input id="sortCode" defaultValue="20-00-00" />
            </div>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Update Banking Details
          </Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>
            Choose how you want to receive notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              id: "emailBookings",
              label: "Email notifications for new bookings",
              defaultChecked: true,
            },
            {
              id: "emailPayments",
              label: "Email notifications for payments",
              defaultChecked: true,
            },
            {
              id: "emailMaintenance",
              label: "Email notifications for maintenance requests",
              defaultChecked: true,
            },
            {
              id: "emailReviews",
              label: "Email notifications for new reviews",
              defaultChecked: false,
            },
            {
              id: "smsBookings",
              label: "SMS notifications for urgent matters",
              defaultChecked: true,
            },
            {
              id: "marketingEmails",
              label: "Marketing and promotional emails",
              defaultChecked: false,
            },
          ].map((setting) => (
            <div key={setting.id} className="flex items-center justify-between">
              <Label htmlFor={setting.id} className="text-sm font-medium">
                {setting.label}
              </Label>
              <Switch id={setting.id} defaultChecked={setting.defaultChecked} />
            </div>
          ))}
          <Button className="bg-purple-600 hover:bg-purple-700">
            Save Preferences
          </Button>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
          <CardDescription>
            Manage your account security and access
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input id="currentPassword" type="password" />
            </div>
            <div>
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input id="confirmPassword" type="password" />
            </div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <Label htmlFor="twoFactor" className="text-sm font-medium">
                Enable Two-Factor Authentication
              </Label>
              <p className="text-sm text-gray-600">
                Add an extra layer of security to your account
              </p>
            </div>
            <Switch id="twoFactor" />
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Update Security Settings
          </Button>
        </CardContent>
      </Card>

      {/* Business Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Business Settings</CardTitle>
          <CardDescription>
            Configure your business operations and policies
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="bookingAdvance">
                Minimum Booking Advance (days)
              </Label>
              <Input id="bookingAdvance" type="number" defaultValue="7" />
            </div>
            <div>
              <Label htmlFor="cancellationPolicy">
                Cancellation Policy (hours)
              </Label>
              <Input id="cancellationPolicy" type="number" defaultValue="24" />
            </div>
            <div>
              <Label htmlFor="depositAmount">Standard Deposit Amount (£)</Label>
              <Input id="depositAmount" type="number" defaultValue="200" />
            </div>
            <div>
              <Label htmlFor="currency">Currency</Label>
              <Input id="currency" defaultValue="GBP (£)" readOnly />
            </div>
          </div>
          <div>
            <Label htmlFor="terms">Terms and Conditions</Label>
            <Textarea
              id="terms"
              placeholder="Enter your terms and conditions for bookings..."
              className="min-h-[100px]"
            />
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Save Business Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorSettings;
