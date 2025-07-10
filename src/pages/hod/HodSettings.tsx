
import React, { useState } from 'react';
import { HodLayout } from '@/components/hod/HodLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { User, Bell, Shield, Database, Mail, Phone, MapPin, Calendar, Save, RefreshCw } from 'lucide-react';

const HodSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    desktop: true
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'department', label: 'Department', icon: Database }
  ];

  return (
    <HodLayout>
      <div className="space-y-4 sm:space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1 sm:mt-2">Manage your account and preferences</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Reset</span>
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              <Save className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Save Changes</span>
              <span className="sm:hidden">Save</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Settings Menu</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 p-3 sm:p-4 text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-r-2 border-emerald-500'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardContent className="p-4 sm:p-6">
              {activeTab === 'profile' && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                      DW
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">Dr. Wilson</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Head of Computer Science Department</p>
                      <Badge className="bg-emerald-100 text-emerald-800 mt-2">Active</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                        <Input id="firstName" defaultValue="David" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                        <Input id="lastName" defaultValue="Wilson" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                        <Input id="email" type="email" defaultValue="d.wilson@university.edu" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
                        <Input id="phone" defaultValue="+1 (555) 123-4567" className="mt-1" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title" className="text-sm font-medium">Title</Label>
                        <Input id="title" defaultValue="Professor & Head of Department" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="department" className="text-sm font-medium">Department</Label>
                        <Input id="department" defaultValue="Computer Science" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="office" className="text-sm font-medium">Office Location</Label>
                        <Input id="office" defaultValue="CS Building, Room 301" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="extension" className="text-sm font-medium">Extension</Label>
                        <Input id="extension" defaultValue="ext. 5501" className="mt-1" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bio" className="text-sm font-medium">Bio</Label>
                    <Textarea 
                      id="bio" 
                      placeholder="Tell us about yourself..."
                      className="mt-1 min-h-[100px]"
                      defaultValue="Dr. David Wilson is a distinguished computer scientist with over 15 years of experience in academia and research. He specializes in artificial intelligence and machine learning."
                    />
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Mail className="h-4 w-4" />
                            <span className="text-sm font-medium">Email Notifications</span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-300">Receive notifications via email</p>
                        </div>
                        <Switch
                          checked={notifications.email}
                          onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Bell className="h-4 w-4" />
                            <span className="text-sm font-medium">Push Notifications</span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-300">Receive push notifications in browser</p>
                        </div>
                        <Switch
                          checked={notifications.push}
                          onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Phone className="h-4 w-4" />
                            <span className="text-sm font-medium">SMS Notifications</span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-300">Receive important alerts via SMS</p>
                        </div>
                        <Switch
                          checked={notifications.sms}
                          onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">Desktop Notifications</span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-300">Show desktop notifications</p>
                        </div>
                        <Switch
                          checked={notifications.desktop}
                          onCheckedChange={(checked) => setNotifications({...notifications, desktop: checked})}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Notification Types</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <label className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Faculty Updates</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Course Changes</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Meeting Reminders</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">System Updates</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="currentPassword" className="text-sm font-medium">Current Password</Label>
                        <Input id="currentPassword" type="password" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="newPassword" className="text-sm font-medium">New Password</Label>
                        <Input id="newPassword" type="password" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" className="mt-1" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Two-Factor Authentication</h3>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium">Two-Factor Authentication</p>
                          <p className="text-xs text-gray-600 dark:text-gray-300">Add an extra layer of security to your account</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Enable 2FA
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Active Sessions</h3>
                    <div className="space-y-3">
                      <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <div>
                            <p className="text-sm font-medium">Current Session</p>
                            <p className="text-xs text-gray-600 dark:text-gray-300">Chrome on Windows • Last active: Now</p>
                          </div>
                          <Badge className="bg-green-100 text-green-800 w-fit">Current</Badge>
                        </div>
                      </div>
                      <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <div>
                            <p className="text-sm font-medium">Mobile Session</p>
                            <p className="text-xs text-gray-600 dark:text-gray-300">Safari on iOS • Last active: 2 hours ago</p>
                          </div>
                          <Button variant="outline" size="sm" className="text-xs">
                            Revoke
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'department' && (
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Department Settings</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <Label htmlFor="deptName" className="text-sm font-medium">Department Name</Label>
                        <Input id="deptName" defaultValue="Computer Science" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="deptCode" className="text-sm font-medium">Department Code</Label>
                        <Input id="deptCode" defaultValue="CS" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="building" className="text-sm font-medium">Building</Label>
                        <Input id="building" defaultValue="Computer Science Building" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="floor" className="text-sm font-medium">Floor</Label>
                        <Input id="floor" defaultValue="3rd Floor" className="mt-1" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Academic Settings</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <Label htmlFor="maxStudents" className="text-sm font-medium">Max Students per Course</Label>
                        <Input id="maxStudents" type="number" defaultValue="50" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="gradingScale" className="text-sm font-medium">Grading Scale</Label>
                        <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
                          <option>A-F Scale</option>
                          <option>Percentage</option>
                          <option>Pass/Fail</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Department Policies</h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Require faculty approval for course changes</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Enable student course evaluations</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Allow cross-department enrollment</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </HodLayout>
  );
};

export default HodSettings;
