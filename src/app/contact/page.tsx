import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-semibold text-blue-900 hover:text-blue-700 transition-colors">
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
              <Link href="/events" className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
                Events
              </Link>
              <Link href="/contact" className="text-blue-800 hover:text-blue-600 transition-colors text-sm font-medium">
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
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 bg-clip-text text-transparent">
              Join Our Community
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Ready to start your journey in tech consulting? Join Columbia Tech Consulting and become part of our growing community.
            </p>
          </div>
        </div>

        <div className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Join Form */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-sm border border-blue-200 rounded-3xl p-8 hover:bg-white transition-all duration-500 shadow-lg">
                  <h2 className="text-3xl font-bold text-blue-900 mb-8 group-hover:text-blue-700 transition-colors">Join Our Club</h2>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-3">
                        Columbia Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        placeholder="your.name@columbia.edu"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="year" className="block text-sm font-medium text-white/80 mb-3">
                        Academic Year
                      </label>
                      <select
                        id="year"
                        name="year"
                        className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 backdrop-blur-sm"
                      >
                        <option value="" className="bg-gray-800">Select your year</option>
                        <option value="freshman" className="bg-gray-800">Freshman</option>
                        <option value="sophomore" className="bg-gray-800">Sophomore</option>
                        <option value="junior" className="bg-gray-800">Junior</option>
                        <option value="senior" className="bg-gray-800">Senior</option>
                        <option value="graduate" className="bg-gray-800">Graduate Student</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="major" className="block text-sm font-medium text-white/80 mb-3">
                        Major/Program
                      </label>
                      <input
                        type="text"
                        id="major"
                        name="major"
                        className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        placeholder="e.g., Computer Science, Software Engineering, Information Systems"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-white/80 mb-3">
                        Relevant Experience
                      </label>
                      <textarea
                        id="experience"
                        name="experience"
                        rows={4}
                        className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 backdrop-blur-sm resize-none"
                        placeholder="Tell us about any programming experience, projects you've built, or software development skills..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-4">
                        Areas of Interest
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {['Web Development', 'Mobile Apps', 'Automation Tools', 'Database Design', 'API Development', 'Cloud Computing', 'UI/UX Design', 'Business Analysis'].map((interest) => (
                          <label key={interest} className="flex items-center group">
                            <input
                              type="checkbox"
                              name="interests"
                              value={interest}
                              className="mr-3 rounded border-white/30 text-blue-500 focus:ring-blue-500 bg-white/10"
                            />
                            <span className="text-sm text-white/70 group-hover:text-white transition-colors">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div className="w-full group relative px-8 py-4 bg-gray-500 text-white rounded-xl font-semibold text-center cursor-not-allowed">
                      <span className="relative z-10">Applications Coming Soon</span>
                    </div>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group-hover:scale-105">
                    <h2 className="text-3xl font-bold text-white mb-8 group-hover:text-purple-300 transition-colors">Get in Touch</h2>
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-lg">Email</h3>
                          <p className="text-white/70">ez2450@columbia.edu</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-lg">Location</h3>
                          <p className="text-white/70">Room TBD<br />Columbia University</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-lg">Meeting Times</h3>
                          <p className="text-white/70">TBD - Check back soon!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group-hover:scale-105">
                    <h2 className="text-3xl font-bold text-white mb-8 group-hover:text-pink-300 transition-colors">Follow Us</h2>
                    <div className="text-center">
                      <p className="text-white/60 text-sm">Social media coming soon!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-32 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
                Everything you need to know about joining Columbia Tech Consulting
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "Do I need prior programming experience to join?",
                  answer: "Some programming experience is helpful, but we welcome students at all skill levels who are eager to learn and build real software solutions."
                },
                {
                  question: "What time commitment is expected?",
                  answer: "Meeting times and commitment details will be announced soon. Stay tuned for updates!"
                },
                {
                  question: "Are there any membership fees?",
                  answer: "No membership fees! All our activities and resources are free for Columbia students."
                },
                {
                  question: "What types of projects will we work on?",
                  answer: "We build custom software solutions for real businesses, including web applications, automation tools, mobile apps, and systems that help streamline business operations."
                }
              ].map((faq, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group-hover:scale-105">
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">{faq.question}</h3>
                    <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-32 relative">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                  Join our community of passionate students and start building your consulting skills today.
                </p>
                <button className="group relative px-10 py-5 bg-white text-black rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">Submit Your Application</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Columbia Tech Consulting</h3>
              <p className="text-white/60 leading-relaxed mb-6 max-w-md">
                Empowering Columbia students to bridge the gap between academia and industry through technology consulting.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <div className="space-y-4">
                <Link href="/about" className="block text-white/60 hover:text-white transition-colors">About Us</Link>
                <Link href="/events" className="block text-white/60 hover:text-white transition-colors">Events</Link>
                <Link href="/contact" className="block text-white/60 hover:text-white transition-colors">Join Us</Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
              <div className="space-y-4 text-white/60">
                <p>ez2450@columbia.edu</p>
                <p>Room TBD</p>
                <p>Columbia University</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/40 text-sm">© 2025 Columbia Tech Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
