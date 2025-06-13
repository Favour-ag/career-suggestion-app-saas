import React from 'react';

export function Stats() {
  const stats = [
    { number: '10K+', label: 'Career Assessments Completed' },
    { number: '500+', label: 'Career Paths Analyzed' },
    { number: '95%', label: 'User Satisfaction Rate' },
    { number: '50+', label: 'Industries Covered' }
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-indigo-100 text-lg">
            Join the community of professionals who found their perfect career match
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-indigo-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}