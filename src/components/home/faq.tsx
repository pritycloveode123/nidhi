"use client";

import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open

  const steps = [
    {
      number: "01",
      title: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      content: "We gather market insights and create a custom strategy for your business.",
    },
    {
      number: "03",
      title: "Implementation",
      content: "We execute the marketing plan with precision and monitor closely.",
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      content: "We analyze data and optimize continuously for best results.",
    },
    {
      number: "05",
      title: "Reporting and Communication",
      content: "You receive regular performance reports and strategic updates.",
    },
    {
      number: "06",
      title: "Continual Improvement",
      content: "We refine strategies over time to ensure long-term growth.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        width: "1434px",
        margin: "3474px auto 0 auto",
        paddingLeft: "100px",
        paddingRight: "100px",
        paddingBottom: "100px",
        fontFamily: "Arial",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {steps.map((step, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              onClick={() => toggle(index)}
              style={{
                borderRadius: "10px",
                border: "1px solid #ccc",
                backgroundColor: isOpen ? "#b6ff76" : "#f8f8f8",
                boxShadow: "2px 2px 0 #00000010",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  padding: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: "bold",
                }}
              >
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <span style={{ fontSize: "20px" }}>{step.number}</span>
                  <span>{step.title}</span>
                </div>
                <span style={{ fontSize: "22px" }}>{isOpen ? "−" : "+"}</span>
              </div>
              {isOpen && step.content && (
                <div
                  style={{
                    padding: "0 16px 16px",
                    fontSize: "14px",
                    color: "#333",
                  }}
                >
                  {step.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
