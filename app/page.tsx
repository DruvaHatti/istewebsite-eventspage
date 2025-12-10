"use client";
import LiquidEther from "@/components/LiquidEther";
import { SigCard } from "@/components/SigCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
    
      <section id="home" className="h-screen flex items-center justify-center border-b border-white/5">
        {/* <div className="absolute inset-0 ">
          <LiquidEther
            colors={[ '#00E5FF', '#00E5FF', '#00E5FF' ]}
          />
        </div> */}
        <h1 className="relative z-10 text-8xl font-display font-bold text-white">
          Welcome to <span className="text-primary">ISTE NITK</span>
        </h1>
      </section>

      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-display text-white mb-4">
            About <span className="text-primary">ISTE NITK</span>
          </h2>
          <p className="text-muted mt-4">
            ISTE NITK is the student chapter of the Indian Society for Technical Education at the National Institute of Technology Karnataka.
             We are dedicated to fostering technical knowledge, innovation, and professional development among students through various activities, workshops, and events.
          </p>
        </div>
      </section>  

      <section id="sigs" className="py-24 px-6 relative">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display text-white mb-4">
            Our <span className="text-primary">SIGs</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Explore our Special Interest Groups designed to foster technical growth.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto">
          <SigCard title="Catalyst" image="/catalyst.jpg" />
          <SigCard title="Charge" image="/charge.jpg" />
          <SigCard title="Chronicle" image="/chronicle.jpg" />
          <SigCard title="Clutch" image="/clutch.jpg" />
          <SigCard title="Concrete" image="/concrete.jpg" />
          <SigCard title="Create" image="/create.jpg" />
          <SigCard title="Credit" image="/credit.jpg" />
          <SigCard title="Crypt" image="/crypt.jpg" />
        </div>
      </section>

      <section id="events" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-display text-white mb-4">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="text-muted mt-4">
            Stay tuned for our upcoming events and workshops designed to enhance your technical skills and knowledge.
          </p>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-16"> 
          
        </div>
      </section>
    </main>
  );
}