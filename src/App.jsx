// import { useState } from 'react'
import React from 'react';
import { RocketIcon, SparklesIcon, PlugZapIcon, MessageSquareIcon } from 'lucide-react';
import { motion } from 'framer-motion';

// import { Button } from './components/ui/button'
// import SenderForm from './components/senderForm'


function App() {


  return (
  
    //    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
    //   <section className="max-w-2xl w-full text-center">
    //     <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
    //       AI-Powered Dynamic Pricing for Shopify Brands
    //     </h1>
    //     <p className="text-lg text-gray-700 mb-6">
    //       LiftIQ automatically adjusts your product prices in real time based on inventory, demand, and seasonality — so you never leave revenue on the table.
    //     </p>
    //     <form
    //       action="https://formsubmit.co/35e66263ec5f5a644d51426fb9e0a676 " // TODO: Replace with your email
    //       method="POST"
    //       className="flex flex-col sm:flex-row items-center gap-3 justify-center"
    //     >
    //       <input
    //         type="email"
    //         name="email"
    //         required
    //         placeholder="Enter your email"
    //         className="px-4 py-2 w-full sm:w-64 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
    //       />
    //       <button
    //         type="submit"
    //         className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
    //       >
    //         Join the Waitlist
    //       </button>
    //     </form>
    //     <p className="mt-4 text-sm text-gray-500">
    //       Be among the first to unlock LiftIQ and boost your pricing power.
    //     </p>
    //   </section>
    // </main>


 <main className="text-gray-900 font-sans scroll-smooth">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Maximize Profits with <span className="text-blue-600">AI‑Driven Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            LiftIQ helps Shopify brands optimize every SKU in real-time using sales, inventory, and demand signals.
          </p>
          <form
            action="https://formsubmit.co/35e66263ec5f5a644d51426fb9e0a676"
            method="POST"
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="px-4 py-3 w-full border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition"
            >
              Join Waitlist
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500">Private beta launching soon — limited to 20 brands.</p>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white to-blue-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Manual Pricing Is Holding You Back</h2>
          <p className="text-xl text-gray-700 mb-10">
            Guesswork costs margin. Discounting too early kills profit. LiftIQ removes the emotion from pricing so your store performs at its peak. With manual pricing, you're either leaving money on the table or losing out to smarter competitors.
          </p>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white shadow-xl rounded-2xl text-left"
            >
              <PlugZapIcon className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">1. Connect</h3>
              <p className="text-gray-600">Easily integrate your Shopify store in under 2 minutes — no coding needed.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white shadow-xl rounded-2xl text-left"
            >
              <SparklesIcon className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">2. Analyze</h3>
              <p className="text-gray-600">Our AI evaluates sales history, stock levels, and trends for every product.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white shadow-xl rounded-2xl text-left"
            >
              <RocketIcon className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">3. Optimize</h3>
              <p className="text-gray-600">LiftIQ intelligently adjusts your pricing to maximize conversions and revenue.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gradient-to-tr from-white to-blue-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-10">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-gray-600 mb-4">For small stores just getting started.</p>
              <p className="text-3xl font-bold mb-6">$49/mo</p>
              <ul className="text-gray-700 space-y-2">
                <li>✔ Up to 50 SKUs</li>
                <li>✔ Weekly pricing updates</li>
                <li>✔ Email support</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <p className="text-gray-600 mb-4">Perfect for scaling Shopify brands.</p>
              <p className="text-3xl font-bold mb-6">$149/mo</p>
              <ul className="text-gray-700 space-y-2">
                <li>✔ Up to 500 SKUs</li>
                <li>✔ Daily pricing updates</li>
                <li>✔ Priority support</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-gray-600 mb-4">For high-volume DTC operators.</p>
              <p className="text-3xl font-bold mb-6">$399/mo</p>
              <ul className="text-gray-700 space-y-2">
                <li>✔ Unlimited SKUs</li>
                <li>✔ Real-time pricing</li>
                <li>✔ Dedicated CSM</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white to-blue-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">We’re Still Building — Tell Us What Hurts</h2>
          <p className="text-lg text-gray-700 mb-8">
            We’d love to hear what pricing challenges you face. What’s your biggest headache with pricing today?
          </p>
          <form
            action="https://formsubmit.co/35e66263ec5f5a644d51426fb9e0a676"
            method="POST"
            className="flex flex-col gap-4"
          >
           <input type="text" name="text"
           required
              placeholder="Tell us your biggest pain point..."
              className="p-4 h-32 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
           />

         
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition"
            >
              Submit Feedback
            </button>
          </form>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-t from-white to-blue-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Increase Revenue Without Lifting a Finger?</h2>
          <form
            action="https://formsubmit.co/35e66263ec5f5a644d51426fb9e0a676"
            method="POST"
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="px-4 py-3 w-full border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition"
            >
              Request Access
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500">We’re only onboarding a few select brands in our beta.</p>
        </motion.div>
      </section>
    </main>
  )
}

export default App
