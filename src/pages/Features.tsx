import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Users, BarChart3, Puzzle, Headphones } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, SSO integration, and compliance certifications including SOC 2 Type II and GDPR.",
      badge: "Security First",
      delay: 0
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Lightning Fast Performance",
      description: "Sub-second response times with global CDN, intelligent caching, and optimized infrastructure that scales automatically.",
      badge: "Performance",
      delay: 0.1
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Team Collaboration",
      description: "Real-time collaboration tools with role-based permissions, activity tracking, and seamless workflow management.",
      badge: "Teamwork",
      delay: 0.2
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards with custom KPIs, predictive insights, and automated reporting to drive data-driven decisions.",
      badge: "Analytics",
      delay: 0.3
    },
    {
      icon: <Puzzle className="h-8 w-8 text-blue-600" />,
      title: "Seamless Integrations",
      description: "Connect with 100+ popular tools through our API-first approach, webhooks, and pre-built connectors.",
      badge: "Integration",
      delay: 0.4
    },
    {
      icon: <Headphones className="h-8 w-8 text-blue-600" />,
      title: "24/7 Expert Support",
      description: "Dedicated customer success team with live chat, video calls, and comprehensive documentation library.",
      badge: "Support",
      delay: 0.5
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  const heroItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const backgroundFloating = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const iconHoverVariants = {
    hover: {
      rotate: [0, -10, 10, -5, 0],
      scale: 1.1
    }
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 0.8, 1],
            rotate: [0, 180, 360],
            x: [0, 100, -50, 0],
            y: [0, -60, 30, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.4, 1.2],
            rotate: [360, 180, 0, 360],
            x: [0, -80, 60, 0],
            y: [0, 40, -20, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Medium floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-blue-300/20 to-indigo-300/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 60, -30, 0],
            y: [0, -40, 20, 0],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-gradient-to-br from-cyan-300/20 to-blue-300/20 rounded-full blur-2xl"
          animate={{
            scale: [0.8, 1.2, 0.8],
            x: [0, -40, 20, 0],
            y: [0, 30, -15, 0],
            rotate: [360, 270, 180, 90, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Small floating particles */}
        <motion.div
          className="absolute top-1/2 left-1/5 w-24 h-24 bg-blue-400/15 rounded-full blur-xl"
          animate={{
            y: [0, -80, 40, 0],
            x: [0, 30, -15, 0],
            scale: [1, 1.3, 0.7, 1],
            opacity: [0.3, 0.6, 0.2, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/5 w-32 h-32 bg-purple-400/15 rounded-full blur-xl"
          animate={{
            y: [0, 60, -30, 0],
            x: [0, -25, 12, 0],
            scale: [0.8, 1.4, 0.9, 0.8],
            opacity: [0.2, 0.5, 0.3, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Geometric shapes */}
        <motion.div
          className="absolute top-1/6 right-1/4 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg blur-sm"
          animate={{
            rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
            scale: [1, 1.2, 1, 0.8, 1],
            x: [0, 20, -10, 5, 0],
            y: [0, -15, 25, -5, 0]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/6 left-1/3 w-16 h-16 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-sm"
          animate={{
            rotate: [360, 270, 180, 90, 0],
            scale: [0.9, 1.3, 0.7, 1.1, 0.9],
            x: [0, -30, 15, -8, 0],
            y: [0, 20, -35, 10, 0]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        
        {/* Animated grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px', '0px 0px']
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Subtle wave animation */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
                        radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)`
          }}
          animate={{
            opacity: [0.3, 0.6, 0.4, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Header Section */}
      <motion.div 
        className="container mx-auto px-6 pt-20 pb-16"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.div variants={heroItemVariants}>
            <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700 bg-blue-50">
              Platform Features
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            variants={heroItemVariants}
          >
            Everything you need to{' '}
            <motion.span 
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 bg-clip-text text-transparent inline-block bg-300% animate-gradient"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "300% 300%"
              }}
            >
              scale faster
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8 leading-relaxed"
            variants={heroItemVariants}
          >
            Powerful features designed to accelerate your growth, streamline operations, 
            and deliver exceptional results for your business.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={heroItemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Start Free Trial
                <motion.div
                  className="ml-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                View Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="container mx-auto px-6 pb-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
            >
              <motion.div
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm h-full">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100"
                    whileHover={{ 
                      opacity: 1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Animated border gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100"
                    animate={{
                      background: [
                        "linear-gradient(45deg, rgba(59,130,246,0.2), rgba(147,51,234,0.2), rgba(59,130,246,0.2))",
                        "linear-gradient(45deg, rgba(147,51,234,0.2), rgba(59,130,246,0.2), rgba(147,51,234,0.2))"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between">
                      <motion.div 
                        className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300"
                        whileHover={{ 
                          rotate: [0, -10, 10, -5, 0],
                          scale: 1.1
                        }}
                        animate={{
                          y: [0, -5, 0]
                        }}
                        transition={{
                          y: {
                            duration: 2 + index * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2
                          },
                          hover: {
                            duration: 0.6,
                            ease: "easeInOut"
                          }
                        }}
                      >
                        {feature.icon}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        whileInView={{ 
                          opacity: 1, 
                          x: 0, 
                          scale: 1,
                          transition: { 
                            delay: feature.delay + 0.2,
                            type: "spring",
                            stiffness: 200
                          }
                        }}
                        viewport={{ once: true }}
                      >
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                          {feature.badge}
                        </Badge>
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          delay: feature.delay + 0.3,
                          duration: 0.6
                        }
                      }}
                      viewport={{ once: true }}
                    >
                      <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                        {feature.title}
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          delay: feature.delay + 0.4,
                          duration: 0.6
                        }
                      }}
                      viewport={{ once: true }}
                    >
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </motion.div>
                    <motion.div 
                      className="mt-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ 
                        opacity: 1,
                        transition: { 
                          delay: feature.delay + 0.5,
                          duration: 0.4
                        }
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium group/btn"
                        >
                          Learn more
                          <motion.div
                            className="ml-1"
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <ArrowRight className="h-3 w-3" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom CTA Section */}
      <div className="container mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8
            }
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 text-white overflow-hidden relative">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20"
              animate={{ 
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <CardContent className="p-12 text-center relative z-10">
              <motion.h2 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Ready to transform your workflow?
              </motion.h2>
              <motion.p 
                className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Join thousands of companies already using our platform to streamline operations and accelerate growth.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
                    Get Started Today
                    <motion.div
                      className="ml-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Button size="lg" variant="ghost" className="text-white border-white/20 hover:bg-white/10">
                    Contact Sales
                  </Button>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;