'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { 
  MoreHorizontal, 
  Search, 
  Filter, 
  Plus, 
  Calendar,
  Users,
  MessageSquare,
  Bell,
  Settings
} from 'lucide-react';

const DashboardPreview = () => {
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dashboardRef.current) {
      gsap.fromTo(dashboardRef.current,
        { 
          y: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
          delay: 1
        }
      );
    }
  }, []);

  return (
    <section className="relative">
      <motion.div 
        ref={dashboardRef}
        className="w-full mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        {/* Dashboard Container */}
        <div className="relative backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between p-3 border-b border-slate-700/50">
            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-sm"></div>
                </div>
                <span className="text-white font-medium">Tracker</span>
              </div>
              <div className="text-gray-400 text-xs md:text-sm">TSK-561</div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-xs  md:text-sm">Inbox</span>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="flex">
            {/* Sidebar */}
            <div className="w-44 lg:w-64 bg-slate-900/50 border-r border-slate-700/50 p-4">
              <div className="space-y-3">
                <div className="text-gray-300 text-sm font-medium">Issues</div>
                <div className="space-y-2">
                  {[
                    { icon: Calendar, label: 'My Issues', count: 12 },
                    { icon: Users, label: 'All Issues', count: 45 },
                    { icon: Bell, label: 'Active', count: 8 },
                    { icon: Settings, label: 'Backlog', count: 23 }
                  ].map((item, index) => (
                    <motion.div 
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      className="flex items-center justify-between p-2 text-xs md:text-md rounded-lg hover:bg-slate-800/50 cursor-pointer group"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                        <span className="text-gray-300 group-hover:text-white transition-colors text-xs md:text-sm">{item.label}</span>
                      </div>
                      <span className="text-gray-500 text-xs">{item.count}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input 
                      type="text" 
                      disabled
                      placeholder="Search issues..."
                      className="bg-slate-800/50 border border-slate-700/50 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <button className="flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-lg px-3 py-2 text-gray-300 hover:text-white transition-colors">
                    <Filter className="w-4 h-4" />
                    <span className="text-xs md:text-sm">All</span>
                  </button>
                </div>
                
                <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 text-white transition-colors">
                  <Plus className="w-4 h-4" />
                  <span className="text-xs md:text-sm">New Issue</span>
                </button>
              </div>

              {/* Issues List */}
              <div className="space-y-3">
                {[
                  { id: 'TSK-561', title: 'Implement user authentication system', status: 'In Progress', priority: 'High', assignee: 'JD' },
                  { id: 'TSK-562', title: 'Design new dashboard layout', status: 'Todo', priority: 'Medium', assignee: 'SM' },
                  { id: 'TSK-563', title: 'Fix responsive mobile issues', status: 'Review', priority: 'High', assignee: 'AL' },
                  { id: 'TSK-564', title: 'Update documentation', status: 'Done', priority: 'Low', assignee: 'MK' }
                ].map((issue, index) => (
                  <motion.div 
                    key={issue.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    className="bg-slate-800/30 border border-slate-700/30 rounded-lg p-2 lg:p-4 hover:bg-slate-800/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-400 text-xs md:text-sm font-mono">{issue.id}</span>
                        <span className="text-white">{issue.title}</span>
                      </div>
                      <div className="flex items-center space-x-3 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          issue.status === 'Done' ? 'bg-green-500/20 text-green-400' :
                          issue.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                          issue.status === 'Review' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {issue.status}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          issue.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                          issue.priority === 'Medium' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {issue.priority}
                        </span>
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                          {issue.assignee}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DashboardPreview;