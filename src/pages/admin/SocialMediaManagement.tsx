import React, { useState } from 'react';
import { 
  Plus, 
  Calendar, 
  Send, 
  Eye, 
  Edit, 
  Trash2, 
  BarChart3,
  Users,
  TrendingUp,
  MessageCircle,
  Heart,
  Share2,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';

interface SocialPost {
  id: string;
  platform: 'facebook' | 'twitter' | 'instagram' | 'youtube';
  content: string;
  image?: string;
  scheduledTime?: string;
  status: 'draft' | 'scheduled' | 'published';
  engagement: {
    likes: number;
    shares: number;
    comments: number;
  };
}

const SocialMediaManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'posts' | 'schedule' | 'analytics'>('overview');
  const [scheduledPosts, setScheduledPosts] = useState<SocialPost[]>([
    {
      id: '1',
      platform: 'facebook',
      content: 'BDRRM Planning Training Workshop completed successfully! 🎯 Thank you to all barangay officials who participated.',
      image: 'https://res.cloudinary.com/dedcmctqk/image/upload/v1750575265/487673077_1062718335885316_7552782387266701410_n_gexfn2.jpg',
      status: 'published',
      engagement: { likes: 45, shares: 12, comments: 8 }
    },
    {
      id: '2',
      platform: 'twitter',
      content: 'Nationwide Earthquake Drill: Over 5,000 participants joined our community preparedness exercise! 🏢 #DisasterPreparedness #PioDuran',
      status: 'published',
      engagement: { likes: 23, shares: 18, comments: 5 }
    }
  ]);

  const socialStats = {
    totalFollowers: 8342,
    monthlyReach: 15600,
    engagement: 4.2,
    postsThisMonth: 24
  };

  const platformStats = [
    { platform: 'Facebook', followers: 2500, engagement: 4.8, posts: 8, color: 'bg-blue-600', icon: Facebook },
    { platform: 'Twitter', followers: 1800, engagement: 3.2, posts: 12, color: 'bg-sky-500', icon: Twitter },
    { platform: 'Instagram', followers: 3200, engagement: 5.1, posts: 6, color: 'bg-pink-600', icon: Instagram },
    { platform: 'YouTube', followers: 842, engagement: 6.3, posts: 2, color: 'bg-red-600', icon: Youtube }
  ];

  const handleDeletePost = (id: string) => {
    if (window.confirm('Are you sure you want to delete this scheduled post?')) {
      setScheduledPosts(prev => prev.filter(post => post.id !== id));
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Social Media Management</h1>
          <p className="text-gray-600">Manage your social media presence and engagement</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus size={20} />
          <span>Create Post</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'posts', label: 'Manage Posts', icon: Edit },
            { id: 'schedule', label: 'Scheduled Posts', icon: Calendar },
            { id: 'analytics', label: 'Analytics', icon: TrendingUp }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Followers</p>
                  <p className="text-3xl font-bold text-gray-900">{formatNumber(socialStats.totalFollowers)}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Reach</p>
                  <p className="text-3xl font-bold text-gray-900">{formatNumber(socialStats.monthlyReach)}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <Eye className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Engagement Rate</p>
                  <p className="text-3xl font-bold text-gray-900">{socialStats.engagement}%</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Posts This Month</p>
                  <p className="text-3xl font-bold text-gray-900">{socialStats.postsThisMonth}</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Send className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Platform Performance */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {platformStats.map((platform) => (
                <div key={platform.platform} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`${platform.color} p-2 rounded-lg`}>
                      <platform.icon size={16} className="text-white" />
                    </div>
                    <span className="font-medium text-gray-900">{platform.platform}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Followers</span>
                      <span className="font-medium">{formatNumber(platform.followers)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Engagement</span>
                      <span className="font-medium text-green-600">{platform.engagement}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Posts</span>
                      <span className="font-medium">{platform.posts}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'posts' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {scheduledPosts.map((post) => {
              const platformConfig = platformStats.find(p => p.platform.toLowerCase() === post.platform);
              return (
                <div key={post.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className={`${platformConfig?.color} p-2 rounded-lg`}>
                      {platformConfig && <platformConfig.icon size={16} className="text-white" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{platformConfig?.platform}</span>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {post.status}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">{post.content}</p>
                      {post.image && (
                        <img 
                          src={post.image} 
                          alt="Post"
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                      )}
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Heart size={14} />
                          <span>{post.engagement.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Share2 size={14} />
                          <span>{post.engagement.shares}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle size={14} />
                          <span>{post.engagement.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === 'schedule' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Scheduled Posts</h3>
          <div className="text-center py-12">
            <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Scheduled Posts</h3>
            <p className="text-gray-500">Create a new post to schedule it for later.</p>
          </div>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Analytics</h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Analytics chart would be displayed here</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Posts</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-900">BDRRM Training Workshop</p>
                  <p className="text-xs text-gray-500">45 likes • 12 shares • 8 comments</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-900">Water Rescue Training</p>
                  <p className="text-xs text-gray-500">67 likes • 8 shares • 12 comments</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Audience Insights</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Age 25-34</span>
                  <span className="text-sm font-medium">35%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Age 35-44</span>
                  <span className="text-sm font-medium">28%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Age 45-54</span>
                  <span className="text-sm font-medium">22%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaManagement;