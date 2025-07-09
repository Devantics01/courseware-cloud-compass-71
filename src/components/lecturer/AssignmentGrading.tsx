
import React from 'react';
import { Clock, Users, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Assignment {
  id: string;
  assignment: string;
  course: string;
  submissions: number;
  totalStudents: number;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
}

interface AssignmentGradingProps {
  assignments: Assignment[];
}

export const AssignmentGrading: React.FC<AssignmentGradingProps> = ({ assignments }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityIcon = (priority: string) => {
    if (priority === 'high') {
      return <AlertCircle size={16} className="text-red-500" />;
    }
    return <Clock size={16} className="text-gray-500" />;
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Pending Grading</h2>
        <Button variant="outline" size="sm" className="self-start sm:self-auto">
          View All
        </Button>
      </div>
      
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="assignment-item group bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-600">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between w-full gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    {getPriorityIcon(assignment.priority)}
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-sm sm:text-base">
                      {assignment.assignment}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className={`${getPriorityColor(assignment.priority)} text-xs`}>
                      {assignment.priority}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 break-words">
                  {assignment.course}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    <span>{assignment.submissions}/{assignment.totalStudents} submitted</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>Due {new Date(assignment.dueDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="w-full">
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(assignment.submissions / assignment.totalStudents) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-row sm:flex-col lg:flex-row gap-2 w-full sm:w-auto lg:w-auto justify-end">
                <Button variant="outline" size="sm" className="flex-1 sm:flex-none text-xs sm:text-sm">
                  Review
                </Button>
                <Button size="sm" className="bg-purple-500 hover:bg-purple-600 flex-1 sm:flex-none text-xs sm:text-sm">
                  Grade
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
