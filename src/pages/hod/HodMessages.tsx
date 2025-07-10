
import React, { useState } from 'react';
import { HodLayout } from '@/components/hod/HodLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, Search, Filter, Plus, Users, Clock, PaperclipIcon } from 'lucide-react';

const HodMessages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1);

  const conversations = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      lastMessage: 'The new curriculum proposal is ready for review.',
      time: '10:30 AM',
      unread: 2,
      type: 'faculty',
      avatar: 'SC'
    },
    {
      id: 2,
      name: 'Faculty Group',
      lastMessage: 'Meeting scheduled for tomorrow at 3 PM.',
      time: '9:45 AM',
      unread: 0,
      type: 'group',
      avatar: 'FG'
    },
    {
      id: 3,
      name: 'Prof. Michael Rodriguez',
      lastMessage: 'Can we discuss the budget allocation?',
      time: 'Yesterday',
      unread: 1,
      type: 'faculty',
      avatar: 'MR'
    },
    {
      id: 4,
      name: 'Admin Team',
      lastMessage: 'New policy updates have been uploaded.',
      time: 'Yesterday',
      unread: 0,
      type: 'admin',
      avatar: 'AT'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Dr. Sarah Chen',
      content: 'The new curriculum proposal is ready for review. I\'ve included the latest updates based on our previous discussions.',
      time: '10:30 AM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'Great work! I\'ll review it this afternoon and get back to you with feedback.',
      time: '10:32 AM',
      isOwn: true
    },
    {
      id: 3,
      sender: 'Dr. Sarah Chen',
      content: 'Perfect. Also, should we schedule a meeting to discuss the implementation timeline?',
      time: '10:35 AM',
      isOwn: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'faculty': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'group': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'admin': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <HodLayout>
      <div className="space-y-4 sm:space-y-6 animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Messages</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1 sm:mt-2">Communicate with faculty and staff</p>
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
            <Plus className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">New Message</span>
            <span className="sm:hidden">New</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Conversations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Faculty Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Group Discussions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Active groups</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <div className="flex flex-col gap-2">
                <CardTitle className="text-lg sm:text-xl">Conversations</CardTitle>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input
                    placeholder="Search messages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 text-sm"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-3 sm:p-4 cursor-pointer transition-colors ${
                      selectedConversation === conversation.id
                        ? 'bg-emerald-50 dark:bg-emerald-900/20 border-r-2 border-emerald-500'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setSelectedConversation(conversation.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold">
                        {conversation.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                            {conversation.name}
                          </h3>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <Badge className={`${getTypeColor(conversation.type)} text-xs`}>
                              {conversation.type}
                            </Badge>
                            {conversation.unread > 0 && (
                              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {conversation.unread}
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 truncate">
                          {conversation.lastMessage}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{conversation.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <CardTitle className="text-lg sm:text-xl">Dr. Sarah Chen</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Add to Group</span>
                  </Button>
                  <Button variant="outline" size="sm">
                    <PaperclipIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col h-96 sm:h-[400px]">
                <div className="flex-1 overflow-y-auto space-y-3 sm:space-y-4 mb-4 pr-2">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] sm:max-w-xs p-3 rounded-lg text-sm ${
                          message.isOwn
                            ? 'bg-emerald-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                        }`}
                      >
                        <p className="break-words">{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.isOwn ? 'text-emerald-200' : 'text-gray-500'
                        }`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Input
                    placeholder="Type a message..."
                    className="flex-1 text-sm"
                  />
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 sm:px-4">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </HodLayout>
  );
};

export default HodMessages;
