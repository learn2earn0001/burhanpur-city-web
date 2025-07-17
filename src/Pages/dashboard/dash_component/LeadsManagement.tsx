
import { useState } from 'react';
import { Search, Filter, Plus, Phone, Mail, MoreVertical } from 'lucide-react';

export const LeadsManagement = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const leads = [
    { id: 1, name: 'Alice Johnson', email: 'alice@email.com', phone: '+1 234-567-8901', status: 'new', source: 'Website', value: '$5,000', date: '2024-01-15' },
    { id: 2, name: 'Bob Smith', email: 'bob@email.com', phone: '+1 234-567-8902', status: 'contacted', source: 'Referral', value: '$3,200', date: '2024-01-14' },
    { id: 3, name: 'Carol Davis', email: 'carol@email.com', phone: '+1 234-567-8903', status: 'qualified', source: 'Social Media', value: '$7,500', date: '2024-01-13' },
    { id: 4, name: 'David Wilson', email: 'david@email.com', phone: '+1 234-567-8904', status: 'converted', source: 'Google Ads', value: '$12,000', date: '2024-01-12' },
    { id: 5, name: 'Eva Brown', email: 'eva@email.com', phone: '+1 234-567-8905', status: 'lost', source: 'Website', value: '$2,800', date: '2024-01-11' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-700';
      case 'contacted': return 'bg-yellow-100 text-yellow-700';
      case 'qualified': return 'bg-purple-100 text-purple-700';
      case 'converted': return 'bg-green-100 text-green-700';
      case 'lost': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredLeads = filterStatus === 'all' ? leads : leads.filter(lead => lead.status === filterStatus);

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Leads Management</h2>
          <p className="text-sm sm:text-base text-gray-600">Track and manage your business leads</p>
        </div>
        <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-sm sm:text-base">
          <Plus size={18} className="mr-2" />
          Add New Lead
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search leads..."
              className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-gray-500" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="converted">Converted</option>
              <option value="lost">Lost</option>
            </select>
          </div>
        </div>
      </div>

      {/* Mobile Cards View */}
      <div className="block md:hidden space-y-4">
        {filteredLeads.map((lead) => (
          <div key={lead.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-gray-900">{lead.name}</h3>
                <p className="text-sm text-gray-600">{lead.email}</p>
                <p className="text-sm text-gray-600">{lead.phone}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(lead.status)}`}>
                {lead.status}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
              <span>{lead.source}</span>
              <span className="font-semibold text-gray-900">{lead.value}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{lead.date}</span>
              <div className="flex gap-2">
                <button className="p-1.5 text-purple-600 hover:bg-purple-50 rounded-md">
                  <Phone size={14} />
                </button>
                <button className="p-1.5 text-purple-600 hover:bg-purple-50 rounded-md">
                  <Mail size={14} />
                </button>
                <button className="p-1.5 text-gray-600 hover:bg-gray-50 rounded-md">
                  <MoreVertical size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 sm:px-6 py-3 sm:py-4 font-semibold text-gray-700 text-sm">Contact</th>
                <th className="text-left px-4 sm:px-6 py-3 sm:py-4 font-semibold text-gray-700 text-sm">Status</th>
                <th className="text-left px-4 sm:px-6 py-3 sm:py-4 font-semibold text-gray-700 text-sm">Source</th>
                <th className="text-left px-4 sm:px-6 py-3 sm:py-4 font-semibold text-gray-700 text-sm">Value</th>
                <th className="text-left px-4 sm:px-6 py-3 sm:py-4 font-semibold text-gray-700 text-sm">Date</th>
                <th className="text-left px-4 sm:px-6 py-3 sm:py-4 font-semibold text-gray-700 text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{lead.name}</div>
                      <div className="text-xs sm:text-sm text-gray-500">{lead.email}</div>
                      <div className="text-xs sm:text-sm text-gray-500">{lead.phone}</div>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium capitalize ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700 text-sm">{lead.source}</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-gray-900 text-sm">{lead.value}</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-600 text-sm">{lead.date}</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <button className="p-1.5 sm:p-2 text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors">
                        <Phone size={14} />
                      </button>
                      <button className="p-1.5 sm:p-2 text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors">
                        <Mail size={14} />
                      </button>
                      <button className="p-1.5 sm:p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                        <MoreVertical size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Conversion Funnel */}
      <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6">Conversion Funnel</h3>
        <div className="space-y-3 sm:space-y-4">
          {[
            { stage: 'Total Leads', count: 2847, percentage: 100, color: 'purple-200' },
            { stage: 'Contacted', count: 1982, percentage: 70, color: 'purple-300' },
            { stage: 'Qualified', count: 1139, percentage: 40, color: 'purple-400' },
            { stage: 'Proposals', count: 569, percentage: 20, color: 'purple-500' },
            { stage: 'Converted', count: 285, percentage: 10, color: 'purple-600' },
          ].map((stage, index) => (
            <div key={index} className="flex items-center">
              <div className="w-20 sm:w-32 text-xs sm:text-sm font-medium text-gray-700">{stage.stage}</div>
              <div className="flex-1 mx-2 sm:mx-4">
                <div className="bg-gray-200 rounded-full h-6 sm:h-8 flex items-center overflow-hidden">
                  <div
                    className={`bg-purple-500 h-full rounded-full flex items-center justify-end pr-2 sm:pr-3 transition-all duration-500`}
                    style={{ width: `${stage.percentage}%` }}
                  >
                    <span className="text-white text-xs sm:text-sm font-medium">{stage.count}</span>
                  </div>
                </div>
              </div>
              <div className="w-10 sm:w-16 text-right text-xs sm:text-sm font-medium text-gray-600">{stage.percentage}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
