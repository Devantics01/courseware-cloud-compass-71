
import React, { useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Settings, Database, Mail, Shield, Globe, Server, Save, RefreshCw, AlertTriangle } from 'lucide-react';

const SystemSettings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [registrationOpen, setRegistrationOpen] = useState(true);

  const tabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'email', label: 'Email', icon: Mail },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'server', label: 'Server', icon: Server }
  ];

  return (
    <AdminLayout>
      <div className="space-y-4 sm:space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">System Settings</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1 sm:mt-2">Configure system-wide settings and preferences</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Reset</span>
            </Button>
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              <Save className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Save Settings</span>
              <span className="sm:hidden">Save</span>
            </Button>
          </div>
        </div>

        {maintenanceMode && (
          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-900/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                <AlertTriangle className="h-4 w-4" />
                <span className="text-sm font-medium">Maintenance Mode is currently enabled. Users cannot access the system.</span>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Settings Categories</CardTitle>
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
                          ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-r-2 border-red-500'
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
              {activeTab === 'general' && (
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">General System Settings</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <Label htmlFor="systemName" className="text-sm font-medium">System Name</Label>
                        <Input id="systemName" defaultValue="Courseware Cloud Compass" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="systemVersion" className="text-sm font-medium">System Version</Label>
                        <Input id="systemVersion" defaultValue="v2.1.0" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="timezone" className="text-sm font-medium">Default Timezone</Label>
                        <select className="w-full p-2 border border-gray-300 rounded-md text-sm mt-1">
                          <option>UTC</option>
                          <option>EST</option>
                          <option>PST</option>
                          <option>GMT</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="language" className="text-sm font-medium">Default Language</Label>
                        <select className="w-full p-2 border border-gray-300 rounded-md text-sm mt-1">
                          <option>English</option>
                          <option>Spanish</option>
                          <option>French</option>
                          <option>German</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">System Control</h3>
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <AlertTriangle className="h-4 w-4 text-orange-500" />
                            <span className="text-sm font-medium">Maintenance Mode</span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-300">Disable user access for system maintenance</p>
                        </div>
                        <Switch
                          checked={maintenanceMode}
                          onCheckedChange={setMaintenanceMode}
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Globe className="h-4 w-4" />
                            <span className="text-sm font-medium">User Registration</span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-300">Allow new users to register accounts</p>
                        </div>
                        <Switch
                          checked={registrationOpen}
                          onCheckedChange={setRegistrationOpen}
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Mail className="h-4 w-4" />
                            <span className="text-sm font-medium">Email Notifications</span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-300">Enable system-wide email notifications</p>
                        </div>
                        <Switch
                          checked={emailNotifications}
                          onCheckedChange={setEmailNotifications}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="announcement" className="text-sm font-medium">System Announcement</Label>
                    <Textarea 
                      id="announcement" 
                      placeholder="Enter system-wide announcement..."
                      className="mt-1 min-h-[100px]"
                      defaultValue="Welcome to the new semester! Please update your profile information."
                    />
                  </div>
                </div>
              )}

              {activeTab === 'email' && (
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">SMTP Configuration</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <Label htmlFor="smtpHost" className="text-sm font-medium">SMTP Host</Label>
                        <Input id="smtpHost" defaultValue="smtp.gmail.com" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="smtpPort" className="text-sm font-medium">SMTP Port</Label>
                        <Input id="smtpPort" type="number" defaultValue="587" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="smtpUser" className="text-sm font-medium">SMTP Username</Label>
                        <Input id="smtpUser" defaultValue="admin@university.edu" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="smtpPass" className="text-sm font-medium">SMTP Password</Label>
                        <Input id="smtpPass" type="password" defaultValue="••••••••••" className="mt-1" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Email Templates</h3>
                    <div className="space-y-3">
                      <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <div>
                            <p className="text-sm font-medium">Welcome Email</p>
                            <p className="text-xs text-gray-600 dark:text-gray-300">Sent to new users upon registration</p>
                          </div>
                          <div className="flex gap-2">
                            <Badge className="bg-green-100 text-green-800 text-xs">Active</Badge>
                            <Button variant="outline" size="sm" className="text-xs">
                              Edit
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <div>
                            <p className="text-sm font-medium">Password Reset</p>
                            <p className="text-xs text-gray-600 dark:text-gray-300">Password recovery instructions</p>
                          </div>
                          <div className="flex gap-2">
                            <Badge className="bg-green-100 text-green-800 text-xs">Active</Badge>
                            <Button variant="outline" size="sm" className="text-xs">
                              Edit
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <div>
                            <p className="text-sm font-medium">Course Notifications</p>
                            <p className="text-xs text-gray-600 dark:text-gray-300">Course updates and announcements</p>
                          </div>
                          <div className="flex gap-2">
                            <Badge className="bg-green-100 text-green-800 text-xs">Active</Badge>
                            <Button variant="outline" size="sm" className="text-xs">
                              Edit
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Security Policies</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <Label htmlFor="maxLoginAttempts" className="text-sm font-medium">Max Login Attempts</Label>
                          <Input id="maxLoginAttempts" type="number" defaultValue="5" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="lockoutDuration" className="text-sm font-medium">Lockout Duration (minutes)</Label>
                          <Input id="lockoutDuration" type="number" defaultValue="30" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="sessionTimeout" className="text-sm font-medium">Session Timeout (hours)</Label>
                          <Input id="sessionTimeout" type="number" defaultValue="24" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="passwordExpiry" className="text-sm font-medium">Password Expiry (days)</Label>
                          <Input id="passwordExpiry" type="number" defaultValue="90" className="mt-1" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Password Requirements</h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Minimum 8 characters</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Require uppercase letters</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Require numbers</span>
                      </label>
                      <label className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Require special characters</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'database' && (
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Database Configuration</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <Label htmlFor="dbHost" className="text-sm font-medium">Database Host</Label>
                        <Input id="dbHost" defaultValue="localhost" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="dbPort" className="text-sm font-medium">Database Port</Label>
                        <Input id="dbPort" type="number" defaultValue="5432" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="dbName" className="text-sm font-medium">Database Name</Label>
                        <Input id="dbName" defaultValue="courseware_db" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="dbUser" className="text-sm font-medium">Database User</Label>
                        <Input id="dbUser" defaultValue="admin" className="mt-1" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Backup Settings</h3>
                    <div className="space-y-3">
                      <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <div>
                            <p className="text-sm font-medium">Automatic Backups</p>
                            <p className="text-xs text-gray-600 dark:text-gray-300">Daily at 2:00 AM</p>
                          </div>
                          <div className="flex gap-2">
                            <Badge className="bg-green-100 text-green-800 text-xs">Enabled</Badge>
                            <Button variant="outline" size="sm" className="text-xs">
                              Configure
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <div>
                            <p className="text-sm font-medium">Backup Retention</p>
                            <p className="text-xs text-gray-600 dark:text-gray-300">Keep backups for 30 days</p>
                          </div>
                          <Button variant="outline" size="sm" className="text-xs">
                            Change
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'server' && (
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Server Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <p className="text-sm font-medium">Server Status</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-green-600">Online</span>
                        </div>
                      </div>
                      <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <p className="text-sm font-medium">Uptime</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">45 days, 12 hours</p>
                      </div>
                      <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <p className="text-sm font-medium">CPU Usage</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">23%</p>
                      </div>
                      <div className="p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <p className="text-sm font-medium">Memory Usage</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">4.2 GB / 8 GB</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Performance Settings</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <Label htmlFor="maxConnections" className="text-sm font-medium">Max Connections</Label>
                        <Input id="maxConnections" type="number" defaultValue="1000" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="cacheSize" className="text-sm font-medium">Cache Size (MB)</Label>
                        <Input id="cacheSize" type="number" defaultValue="512" className="mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SystemSettings;
