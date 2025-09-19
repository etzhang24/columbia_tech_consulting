import Link from "next/link";

export default function Events() {
  // const upcomingEvents = [];
  // const pastEvents = [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-xl font-semibold text-blue-900 hover:text-blue-700 transition-colors">
                <img src="/crown-logo.png" alt="Crown Logo" className="w-8 h-8 mr-3" />
                Columbia Tech Consulting
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
                About
              </Link>
              <Link href="/events" className="text-blue-800 hover:text-blue-600 transition-colors text-sm font-medium">
                Events
              </Link>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
                Join
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <div className="relative py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-blue-50/30 to-blue-200/50"></div>
          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full text-sm font-medium mb-8 text-blue-800">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
              Columbia University
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-blue-900">
              Events & Activities
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Join us for workshops, networking events, and hands-on consulting projects that will help you grow professionally.
            </p>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Don&apos;t miss out on these exciting opportunities to learn and network
              </p>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-blue-200 rounded-3xl p-16 text-center shadow-lg">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">No Events Yet</h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  We&apos;re just getting started! Check back soon for exciting workshops, networking events, and consulting projects.
                </p>
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Get Notified of New Events</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Past Events */}
        <div className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900">
                Past Events
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Check out what we&apos;ve accomplished together
              </p>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-blue-200 rounded-3xl p-16 text-center shadow-lg">
                <div className="w-20 h-20 bg-gradient-to-r from-gray-500 to-blue-500 rounded-full mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">No Past Events Yet</h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  We&apos;re a new club starting in 2025! Our first events and activities will be announced soon.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Event Calendar */}
        <div className="py-32 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900">
                Event Calendar
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Stay updated with our full calendar of events
              </p>
            </div>
            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border border-blue-200 rounded-3xl p-16 text-center shadow-lg">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Full Calendar Coming Soon</h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  We&apos;re working on integrating a full calendar view. For now, check our upcoming events above!
                </p>
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Get Notified of New Events</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-32 relative">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/90 backdrop-blur-sm border border-blue-200 rounded-3xl p-16 shadow-lg">
                <h2 className="text-5xl md:text-6xl font-bold mb-8 text-blue-900">
                  Don&apos;t Miss Out!
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                  Join our club to get early access to events and exclusive networking opportunities.
                </p>
                <Link
                  href="/contact"
                  className="group relative px-10 py-5 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Join Our Club</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-200 py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Columbia Tech Consulting</h3>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
                Connect with us
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-900 mb-6">Quick Links</h4>
              <div className="space-y-4">
                <Link href="/about" className="block text-gray-600 hover:text-blue-700 transition-colors">About Us</Link>
                <Link href="/events" className="block text-gray-600 hover:text-blue-700 transition-colors">Events</Link>
                <Link href="/contact" className="block text-gray-600 hover:text-blue-700 transition-colors">Join Us</Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-blue-900 mb-6">Contact</h4>
              <div className="space-y-4 text-gray-600">
                <p>ez2450@columbia.edu</p>
                <p>Room TBD</p>
                <p>Columbia University</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-200 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2025 Columbia Tech Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}