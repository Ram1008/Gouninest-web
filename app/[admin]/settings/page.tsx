'use client';
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Settings as SettingsIcon,
  Shield,
  Bell,
  Mail,
  CreditCard,
  Database,
} from "lucide-react";

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    autoApproveVendors: false,
    maintenanceMode: false,
    allowNewRegistrations: true,
    requireEmailVerification: true,
  });

  const toggleSetting = (key: string) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">
            Manage platform configuration and preferences
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SettingsIcon className="w-5 h-5" />
              <span>Platform Settings</span>
            </CardTitle>
            <CardDescription>
              General platform configuration options
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Maintenance Mode</p>
                <p className="text-sm text-gray-600">
                  Temporarily disable the platform
                </p>
              </div>
              <Switch
                checked={settings.maintenanceMode}
                onCheckedChange={() => toggleSetting("maintenanceMode")}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Allow New Registrations</p>
                <p className="text-sm text-gray-600">Enable new user signups</p>
              </div>
              <Switch
                checked={settings.allowNewRegistrations}
                onCheckedChange={() => toggleSetting("allowNewRegistrations")}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Require Email Verification</p>
                <p className="text-sm text-gray-600">
                  Users must verify email addresses
                </p>
              </div>
              <Switch
                checked={settings.requireEmailVerification}
                onCheckedChange={() =>
                  toggleSetting("requireEmailVerification")
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="w-5 h-5" />
              <span>Notification Settings</span>
            </CardTitle>
            <CardDescription>
              Configure how you receive notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-gray-600">
                  Receive alerts via email
                </p>
              </div>
              <Switch
                checked={settings.emailNotifications}
                onCheckedChange={() => toggleSetting("emailNotifications")}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">SMS Notifications</p>
                <p className="text-sm text-gray-600">
                  Receive urgent alerts via SMS
                </p>
              </div>
              <Switch
                checked={settings.smsNotifications}
                onCheckedChange={() => toggleSetting("smsNotifications")}
              />
            </div>
            <div>
              <p className="font-medium mb-2">Notification Email</p>
              <Input
                type="email"
                placeholder="admin@studenthome.com"
                defaultValue="admin@studenthome.com"
              />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Security Settings</span>
            </CardTitle>
            <CardDescription>
              Platform security and access controls
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Auto-approve Vendors</p>
                <p className="text-sm text-gray-600">
                  Automatically approve new vendor applications
                </p>
              </div>
              <Switch
                checked={settings.autoApproveVendors}
                onCheckedChange={() => toggleSetting("autoApproveVendors")}
              />
            </div>
            <div>
              <p className="font-medium mb-2">Session Timeout (minutes)</p>
              <Input type="number" defaultValue="60" min="15" max="480" />
            </div>
            <div>
              <p className="font-medium mb-2">Maximum Login Attempts</p>
              <Input type="number" defaultValue="5" min="3" max="10" />
            </div>
          </CardContent>
        </Card>

        {/* Payment Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5" />
              <span>Payment Settings</span>
            </CardTitle>
            <CardDescription>Payment processing configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-medium mb-2">Platform Commission (%)</p>
              <Input
                type="number"
                defaultValue="5"
                min="0"
                max="20"
                step="0.1"
              />
            </div>
            <div>
              <p className="font-medium mb-2">Payment Processing Fee (%)</p>
              <Input
                type="number"
                defaultValue="2.9"
                min="0"
                max="10"
                step="0.1"
              />
            </div>
            <div className="space-y-2">
              <p className="font-medium">Supported Payment Methods</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Credit Card</Badge>
                <Badge variant="outline">Debit Card</Badge>
                <Badge variant="outline">Bank Transfer</Badge>
                <Badge variant="outline">PayPal</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="w-5 h-5" />
            <span>System Information</span>
          </CardTitle>
          <CardDescription>
            Current system status and information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="font-medium text-gray-900">Platform Version</p>
              <p className="text-2xl font-bold text-blue-600">v2.1.0</p>
              <p className="text-sm text-gray-600">Latest stable release</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Database Status</p>
              <p className="text-2xl font-bold text-green-600">Healthy</p>
              <p className="text-sm text-gray-600">All systems operational</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Last Backup</p>
              <p className="text-2xl font-bold text-purple-600">2h ago</p>
              <p className="text-sm text-gray-600">Automated daily backups</p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t">
            <div className="flex space-x-4">
              <Button>Save Changes</Button>
              <Button variant="outline">Reset to Defaults</Button>
              <Button
                variant="outline"
                className="text-red-600 hover:text-red-700"
              >
                Export Settings
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
