"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function QuickCommerceDashboard() {
  const [deliveryData, setDeliveryData] = useState(null);
  const [consumerData, setConsumerData] = useState(null);
  const [environmentData, setEnvironmentData] = useState(null);
  const [laborData, setLaborData] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  const colors = {
    primary: "bg-gradient-to-r from-teal-600 to-indigo-700",
    secondary: "bg-indigo-100 text-indigo-800",
    accent: "bg-teal-100 text-teal-800",
    danger: "bg-rose-100 text-rose-800",
    success: "bg-emerald-100 text-emerald-800",
    warning: "bg-amber-100 text-amber-800",
  };

  useEffect(() => {
    // Mock data - replace with actual API calls
    const mockData = {
      delivery: {
        avgDeliveryTime: 12.5,
        ordersToday: 12543,
        onTimeRate: 87,
        deliveryDelay: 13,
        customerComplaints: 342,
      },
      consumer: {
        avgOrdersPerUser: 4.2,
        impulsePurchaseRate: 38,
        expectFastDelivery: 72,
        immediateNeed: 65,
        instantGratification: 68,
        orderingFrequency: 4.8,
        speedExpectation: 8.2,
      },
      environment: {
        co2Emissions: 12450,
        packagingWaste: 8.7,
        evFleetPercentage: 15,
        deliveryTrips: 28765,
        environmentalDegradation: 7.4,
      },
      labor: {
        avgTimePressure: 7.8,
        turnoverRate: 22,
        accidentsThisMonth: 14,
        workerStress: 8.1,
        overspeedingIncidents: 23,
        gigWorkerTurnover: 28,
      },
      system: {
        quickCommerceAvailability: 78,
        darkStoreInfrastructure: 245,
        customerDissatisfaction: 18,
      },
    };

    setDeliveryData(mockData.delivery);
    setConsumerData(mockData.consumer);
    setEnvironmentData(mockData.environment);
    setLaborData(mockData.labor);
  }, []);

  const orderVolumeData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Orders (thousands)",
        data: [65, 78, 66, 89, 96, 112, 125],
        borderColor: "rgb(79, 70, 229)",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const deliveryPerformanceData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Avg Delivery Time (mins)",
        data: [18, 16, 15, 14, 13, 12, 12.5],
        borderColor: "rgb(6, 182, 212)",
        backgroundColor: "rgba(6, 182, 212, 0.2)",
      },
      {
        label: "On-time Rate (%)",
        data: [72, 75, 78, 80, 83, 85, 87],
        borderColor: "rgb(16, 185, 129)",
        backgroundColor: "rgba(16, 185, 129, 0.2)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "data":
        return (
          <div className="space-y-6 text-black">
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">
                Real-time Quick Commerce Metrics
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-indigo-500">
                  <h3 className="text-base md:text-lg font-medium text-gray-800 mb-2">
                    Delivery Performance
                  </h3>
                  {deliveryData ? (
                    <div className="space-y-2 md:space-y-3">
                      <div>
                        <p className="text-xs md:text-sm text-gray-500">
                          Avg. Delivery Time
                        </p>
                        <p className="text-xl md:text-2xl font-bold">
                          {deliveryData.avgDeliveryTime} mins
                        </p>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-gray-500">
                          Orders Today
                        </p>
                        <p className="text-xl md:text-2xl font-bold">
                          {deliveryData.ordersToday.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-gray-500">
                          On-time Rate
                        </p>
                        <p className="text-xl md:text-2xl font-bold">
                          {deliveryData.onTimeRate}%
                        </p>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-gray-500">
                          Delivery Delays
                        </p>
                        <p className="text-xl md:text-2xl font-bold">
                          {deliveryData.deliveryDelay}%
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500">Loading data...</p>
                  )}
                </div>

                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-teal-500">
                  <h3 className="text-base md:text-lg font-medium text-gray-800 mb-2">
                    Consumer Behavior
                  </h3>
                  {consumerData ? (
                    <div className="space-y-2 md:space-y-3">
                      <div>
                        <p className="text-xs md:text-sm text-gray-500">
                          Avg. Orders per User
                        </p>
                        <p className="text-xl md:text-2xl font-bold">
                          {consumerData.avgOrdersPerUser}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-gray-500">
                          Impulse Purchases
                        </p>
                        <p className="text-xl md:text-2xl font-bold">
                          {consumerData.impulsePurchaseRate}%
                        </p>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-gray-500">
                          Expect 10min Delivery
                        </p>
                        <p className="text-xl md:text-2xl font-bold">
                          {consumerData.expectFastDelivery}%
                        </p>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-gray-500">
                          Immediate Need
                        </p>
                        <p className="text-xl md:text-2xl font-bold">
                          {consumerData.immediateNeed}%
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500">Loading data...</p>
                  )}
                </div>

                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-emerald-500">
                  <h3 className="text-base md:text-lg font-medium text-gray-800 mb-2">
                    Environmental Impact
                  </h3>
                  {environmentData ? (
                    <div className="space-y-2 md:space-y-3">
                      <div>
                        <p className="text-xs md:text-sm text-gray-500">
                          CO2 Emissions (kg)
                        </p>
                        <p className="text-xl md:text-2xl font-bold">
                          {environmentData.co2Emissions.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-gray-500">
                          Packaging Waste
                        </p>
                        <p className="text-xl md:text-2xl font-bold">
                          {environmentData.packagingWaste} tons
                        </p>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-gray-500">
                          Delivery Trips
                        </p>
                        <p className="text-xl md:text-2xl font-bold">
                          {environmentData.deliveryTrips.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-gray-500">
                          Environmental Degradation
                        </p>
                        <p className="text-xl md:text-2xl font-bold">
                          {environmentData.environmentalDegradation}/10
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500">Loading data...</p>
                  )}
                </div>

                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border-t-4 border-rose-500">
                  <h3 className="text-base md:text-lg font-medium text-gray-800 mb-2">
                    Labor Conditions
                  </h3>
                  {laborData ? (
                    <div className="space-y-2 md:space-y-3">
                      <div>
                        <p className="text-xs md:text-sm text-gray-500">
                          Avg. Delivery Time Pressure
                        </p>
                        <p className="text-xl md:text-2xl font-bold">
                          {laborData.avgTimePressure}/10
                        </p>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-gray-500">
                          Monthly Turnover Rate
                        </p>
                        <p className="text-xl md:text-2xl font-bold">
                          {laborData.turnoverRate}%
                        </p>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-gray-500">
                          Reported Accidents
                        </p>
                        <p className="text-xl md:text-2xl font-bold">
                          {laborData.accidentsThisMonth}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-gray-500">
                          Worker Stress Level
                        </p>
                        <p className="text-xl md:text-2xl font-bold">
                          {laborData.workerStress}/10
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500">Loading data...</p>
                  )}
                </div>
              </div>
            </section>

            <section className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                Trend Analysis
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 h-64 md:h-80">
                  <h3 className="text-sm md:text-base font-medium text-gray-700 mb-2">
                    Order Volume Over Time
                  </h3>
                  <div className="h-48 md:h-64">
                    <Line data={orderVolumeData} options={chartOptions} />
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 h-64 md:h-80">
                  <h3 className="text-sm md:text-base font-medium text-gray-700 mb-2">
                    Delivery Performance Metrics
                  </h3>
                  <div className="h-48 md:h-64">
                    <Bar
                      data={deliveryPerformanceData}
                      options={{
                        ...chartOptions,
                        scales: {
                          y: {
                            beginAtZero: true,
                            max: 100,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      case "analysis":
        return (
          <div className="space-y-6 text-black">
            <section className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                System Dynamics Analysis
              </h2>
              <div className="prose max-w-none text-gray-700 mb-4 md:mb-6">
                <p>
                  Our Causal Loop Diagram (CLD) shows how variables influence
                  each other through feedback loops, including variables from
                  three circles: Consumer Behavior, Labor Conditions, and
                  Environmental Cost.
                </p>
              </div>

              <div className="bg-gray-100 p-4 md:p-6 rounded-lg border border-gray-200">
                <div className="bg-gray-100 p-4 md:p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-center">
                    <div className="bg-white p-4 rounded border border-gray-300 w-full max-w-3xl h-[50rem] flex items-center justify-center">
                      <img
                        src="https://res.cloudinary.com/df622sxkk/image/upload/v1746460201/IMG-20250505-WA0002_muqns4.jpg"
                        alt="Quick Commerce System Image"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">
                    Key Variables in the System
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-medium text-indigo-800 mb-2">
                        Consumer Behavior
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Immediate Need for Product</li>
                        <li>• Instant Gratification</li>
                        <li>• Impulse Buying</li>
                        <li>• Ordering Frequency</li>
                        <li>• Speed Expectation</li>
                        <li>• Customer Dissatisfaction</li>
                      </ul>
                    </div>
                    <div className="bg-rose-50 p-4 rounded-lg">
                      <h4 className="font-medium text-rose-800 mb-2">
                        Labor Conditions
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Delivery Time Pressure</li>
                        <li>• Worker Stress & Fatigue</li>
                        <li>• Overspeeding / Accidents</li>
                        <li>• Gig Worker Turnover</li>
                      </ul>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h4 className="font-medium text-emerald-800 mb-2">
                        Environmental Cost
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Number of Delivery Trips</li>
                        <li>• Delivery Vehicle Emissions</li>
                        <li>• Packaging Waste</li>
                        <li>• Environmental Degradation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Reinforcing Loops (Growth Drivers)
                    </h3>
                    <div className="space-y-4">
                      <div className={`p-3 ${colors.accent} rounded-lg`}>
                        <h4 className="font-medium">
                          R1 – Instant Gratification Loop
                        </h4>
                        <p className="text-sm mt-1">
                          Faster delivery → more impulse buying → increased
                          ordering frequency → higher speed expectations → more
                          demand for 10-min delivery
                        </p>
                        <p className="text-xs mt-2 italic">
                          Consumers shift from planned shopping to buying on the
                          go, creating a cycle of demand.
                        </p>
                      </div>
                      <div className={`p-3 ${colors.success} rounded-lg`}>
                        <h4 className="font-medium">
                          R2 – Speed Expectation Spiral
                        </h4>
                        <p className="text-sm mt-1">
                          Rising consumer speed expectations → platforms build
                          more dark stores and logistics → expands 10-min
                          coverage → reinforces speed as a norm.
                        </p>
                        <p className="text-xs mt-2 italic">
                          Triggers a competitive "arms race" where companies
                          must keep speeding up to retain users.
                        </p>
                      </div>
                      <div className={`p-3 ${colors.warning} rounded-lg`}>
                        <h4 className="font-medium">
                          R3 – Environmental Impact Loop
                        </h4>
                        <p className="text-sm mt-1">
                          More quick orders → more delivery trips and packaging
                          → higher emissions and waste → worsened environmental
                          degradation.
                        </p>
                        <p className="text-xs mt-2 italic">
                          Unchecked growth leads to ecological consequences.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Balancing Loops (System Limits)
                    </h3>
                    <div className="space-y-4">
                      <div className={`p-3 ${colors.danger} rounded-lg`}>
                        <h4 className="font-medium">
                          B1 – Customer Satisfaction Balancer
                        </h4>
                        <p className="text-sm mt-1">
                          Pressure to deliver faster → overspeeding and rider
                          fatigue → increased accidents and delivery delays →
                          customer dissatisfaction → reduced demand.
                        </p>
                        <p className="text-xs mt-2 italic">
                          This loop tempers growth by showing how excessive
                          speed harms service quality and trust.
                        </p>
                      </div>
                      <div className={`p-3 ${colors.secondary} rounded-lg`}>
                        <h4 className="font-medium">
                          B2 – Regulatory Backlash Loop
                        </h4>
                        <p className="text-sm mt-1">
                          Environmental degradation → public concern →
                          government regulations → constraints on quick commerce
                          → reduced environmental impact.
                        </p>
                        <p className="text-xs mt-2 italic">
                          Potential future balancing mechanism as impacts become
                          more visible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                System Archetypes in Quick Commerce
              </h2>
              <div className="prose max-w-none text-gray-700 mb-4 md:mb-6">
                <p>
                  We observe familiar system archetypes in quick commerce that
                  help explain the systemic challenges and potential pitfalls:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-4 ${colors.warning} rounded-lg`}>
                  <h3 className="text-lg font-medium mb-2">
                    Tragedy of the Commons
                  </h3>
                  <p className="text-sm">
                    Multiple platforms over-exploit shared resources (road
                    space, labor). Each adds more riders and dark stores to win
                    market share, collectively causing congestion and pollution.
                  </p>
                </div>
                <div className={`p-4 ${colors.danger} rounded-lg`}>
                  <h3 className="text-lg font-medium mb-2">Fixes that Fail</h3>
                  <p className="text-sm">
                    Symptomatic fixes (like adding more dark stores or riders)
                    may solve delivery delays temporarily but worsen congestion
                    and emissions. Each quick fix leads to unintended side
                    effects that undermine the solution.
                  </p>
                </div>
                <div className={`p-4 ${colors.secondary} rounded-lg`}>
                  <h3 className="text-lg font-medium mb-2">
                    Shifting the Burden
                  </h3>
                  <p className="text-sm">
                    Relying on ultra-fast delivery is a short-term fix that
                    diverts attention from deeper issues. Platforms invest in
                    technology to deliver faster instead of addressing root
                    causes like inefficient urban planning or consumption
                    habits.
                  </p>
                </div>
                <div className={`p-4 ${colors.accent} rounded-lg`}>
                  <h3 className="text-lg font-medium mb-2">
                    Success to the Successful
                  </h3>
                  <p className="text-sm">
                    Large platforms that deliver faster capture more customers,
                    pushing smaller retailers aside. This self-reinforcing
                    dynamic concentrates market power and makes the fast model
                    even stronger over time.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                Leverage Points Analysis
              </h2>
              <div className="prose max-w-none text-gray-700 mb-4 md:mb-6">
                <p>
                  Leverage points are places in a system where a small change
                  can have large effects. Based on Meadows framework, we have
                  identified key intervention points.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Leverage Point
                      </th>
                      <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Why Important
                      </th>
                      <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Expected Impact
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Minimum order value / delivery fees
                      </td>
                      <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-sm text-gray-500">
                        Numbers-Constants and Parameters
                      </td>
                      <td className="px-4 py-2 md:px-6 md:py-4 text-sm text-gray-500">
                        Discourages small orders and spreads demand
                      </td>
                      <td className="px-4 py-2 md:px-6 md:py-4 text-sm text-gray-500">
                        Fewer trivial deliveries; more efficient routes
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Dark store locations & routes
                      </td>
                      <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-sm text-gray-500">
                        Material flows
                      </td>
                      <td className="px-4 py-2 md:px-6 md:py-4 text-sm text-gray-500">
                        Optimizes logistics and reduces travel distance
                      </td>
                      <td className="px-4 py-2 md:px-6 md:py-4 text-sm text-gray-500">
                        Lower emissions; less traffic congestion
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Transparent impact information
                      </td>
                      <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-sm text-gray-500">
                        Information flows
                      </td>
                      <td className="px-4 py-2 md:px-6 md:py-4 text-sm text-gray-500">
                        Informs consumers of carbon footprint and labor costs
                      </td>
                      <td className="px-4 py-2 md:px-6 md:py-4 text-sm text-gray-500">
                        Shifts choices toward eco-friendly options
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Stricter labor and packaging rules
                      </td>
                      <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-sm text-gray-500">
                        Rules-Incentives,Punishments,Constraints
                      </td>
                      <td className="px-4 py-2 md:px-6 md:py-4 text-sm text-gray-500">
                        Protects workers and environment (e.g., enforce breaks,
                        ban plastics)
                      </td>
                      <td className="px-4 py-2 md:px-6 md:py-4 text-sm text-gray-500">
                        Fewer accidents; less waste
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Goal shift to sustainable convenience
                      </td>
                      <td className="px-4 py-2 md:px-6 md:py-4 whitespace-nowrap text-sm text-gray-500">
                        Goals-The Purpose
                      </td>
                      <td className="px-4 py-2 md:px-6 md:py-4 text-sm text-gray-500">
                        Changes company objectives beyond just speed
                      </td>
                      <td className="px-4 py-2 md:px-6 md:py-4 text-sm text-gray-500">
                        Balances growth with social & environmental goals
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        );
      case "solutions":
        return (
          <div className="space-y-6">
            {/* EPS Analysis */}
            <section className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                Structural Analysis
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="bg-indigo-50 p-4 md:p-5 rounded-lg">
                  <h3 className="text-base md:text-lg font-medium text-indigo-800 mb-2 md:mb-3">
                    Event Level
                  </h3>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block bg-indigo-100 text-indigo-800 rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center mr-2 mt-0.5">
                        •
                      </span>
                      <span>Groceries delivered in 10 minutes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block bg-indigo-100 text-indigo-800 rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center mr-2 mt-0.5">
                        •
                      </span>
                      <span>More dark stores and delivery fleets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block bg-indigo-100 text-indigo-800 rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center mr-2 mt-0.5">
                        •
                      </span>
                      <span>City congestion rises</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block bg-indigo-100 text-indigo-800 rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center mr-2 mt-0.5">
                        •
                      </span>
                      <span>Workers report rushed rides and accidents</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-4 md:p-5 rounded-lg">
                  <h3 className="text-base md:text-lg font-medium text-teal-800 mb-2 md:mb-3">
                    Pattern Level
                  </h3>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block bg-teal-100 text-teal-800 rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center mr-2 mt-0.5">
                        •
                      </span>
                      <span>Growing demand for instant delivery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block bg-teal-100 text-teal-800 rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center mr-2 mt-0.5">
                        •
                      </span>
                      <span>Rising traffic, pollution, and worker stress</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block bg-teal-100 text-teal-800 rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center mr-2 mt-0.5">
                        •
                      </span>
                      <span>Increased corporate focus on faster logistics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block bg-teal-100 text-teal-800 rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center mr-2 mt-0.5">
                        •
                      </span>
                      <span>Gradual rise in public concern</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 md:p-5 rounded-lg">
                  <h3 className="text-base md:text-lg font-medium text-purple-800 mb-2 md:mb-3">
                    Structure Level
                  </h3>
                  <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block bg-purple-100 text-purple-800 rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center mr-2 mt-0.5">
                        •
                      </span>
                      <span>Speed prioritized over safety/sustainability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block bg-purple-100 text-purple-800 rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center mr-2 mt-0.5">
                        •
                      </span>
                      <span>Incentives push risky worker behavior</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block bg-purple-100 text-purple-800 rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center mr-2 mt-0.5">
                        •
                      </span>
                      <span>Consumers expect fast service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block bg-purple-100 text-purple-800 rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center mr-2 mt-0.5">
                        •
                      </span>
                      <span>Weak labor and environmental regulations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block bg-purple-100 text-purple-800 rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center mr-2 mt-0.5">
                        •
                      </span>
                      <span>Low transparency into true costs</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">
                  Proposed Structural Solutions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-indigo-50 p-3 md:p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-800 mb-1 md:mb-2">
                      1. Redefine System Goals
                    </h4>
                    <p className="text-xs md:text-sm text-gray-700">
                      Shift from "fastest delivery" to "sustainable
                      convenience," balancing speed with worker well-being and
                      environmental health.
                    </p>
                  </div>
                  <div className="bg-teal-50 p-3 md:p-4 rounded-lg">
                    <h4 className="font-medium text-teal-800 mb-1 md:mb-2">
                      2. Change Rules & Incentives
                    </h4>
                    <p className="text-xs md:text-sm text-gray-700">
                      Implement pricing that reflects social costs (e.g., higher
                      fees for tiny orders) and enforce labor and environmental
                      regulations. Incentivize bulk or off-peak deliveries to
                      reduce strain.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-3 md:p-4 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-1 md:mb-2">
                      3. Increase Transparency
                    </h4>
                    <p className="text-xs md:text-sm text-gray-700">
                      Show consumers the carbon footprint and labor conditions
                      of each order (e.g., via app data), empowering informed
                      choices.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-3 md:p-4 rounded-lg">
                    <h4 className="font-medium text-emerald-800 mb-1 md:mb-2">
                      4. Optimize Infrastructure
                    </h4>
                    <p className="text-xs md:text-sm text-gray-700">
                      Support local stores joining quick-commerce platforms and
                      redesign delivery networks (smarter dark store placement,
                      dedicated EV fleets) to lower travel distance and energy
                      use.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-3 md:p-4 rounded-lg">
                    <h4 className="font-medium text-amber-800 mb-1 md:mb-2">
                      5. Shift Consumer Mindsets
                    </h4>
                    <p className="text-xs md:text-sm text-gray-700">
                      Promote values of responsible consumption over instant
                      gratification through education and campaigns (encourage
                      planning and reduce impulse buys).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                Implementation Roadmap
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div
                    className={`flex-shrink-0 ${colors.secondary} rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center mr-3 md:mr-4 mt-0.5`}
                  >
                    1
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-medium text-gray-800 mb-1">
                      Short-term (0-6 months)
                    </h3>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                      <li>
                        Implement minimum order values and dynamic delivery fees
                      </li>
                      <li>Improve rider safety equipment and training</li>
                      <li>Launch consumer awareness campaigns about impacts</li>
                      <li>Pilot carbon footprint labeling on orders</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start">
                  <div
                    className={`flex-shrink-0 ${colors.secondary} rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center mr-3 md:mr-4 mt-0.5`}
                  >
                    2
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-medium text-gray-800 mb-1">
                      Medium-term (6-18 months)
                    </h3>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                      <li>
                        Optimize dark store locations using data analytics
                      </li>
                      <li>Transition 30-50% of fleet to electric vehicles</li>
                      <li>Implement transparent impact reporting in apps</li>
                      <li>Develop sustainable packaging alternatives</li>
                      <li>Establish industry-wide labor standards</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start">
                  <div
                    className={`flex-shrink-0 ${colors.secondary} rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center mr-3 md:mr-4 mt-0.5`}
                  >
                    3
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-medium text-gray-800 mb-1">
                      Long-term (18+ months)
                    </h3>
                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                      <li>
                        Advocate for policy changes and urban planning
                        adjustments
                      </li>
                      <li>Scale EV fleet to 80-100% coverage</li>
                      <li>Establish circular economy for packaging</li>
                      <li>Develop industry-wide sustainability standards</li>
                      <li>
                        Integrate with public transportation for last-mile
                        delivery
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <section className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className={`p-4 md:p-6 text-white ${colors.primary}`}>
                <p className="mt-1 md:mt-2 opacity-90 font-bold text-sm md:text-xl">
                  How is 10-minute delivery changing consumer behavior, and what
                  are the trade-offs in terms of environmental cost and labour
                  conditions?
                </p>
              </div>
              <div className="p-4 md:p-6">
                <div className="prose max-w-none">
                  <p className="text-sm md:text-base text-gray-700">
                    Quick commerce refers to online retail models promising
                    delivery in about 10 minutes, enabled by networks of urban
                    "dark stores" and delivery riders. Companies like Blinkit,
                    Zepto, and Swiggy Instamart are competing to serve India
                    1.4 billion consumers with lightning-fast convenience.
                  </p>
                  <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-700">
                    However, this convenience has hidden costs. Ultra-fast
                    delivery reshapes consumer behavior (more impulse buying and
                    higher speed expectations), strains delivery workers
                    (pressure and accidents), and increases environmental
                    impacts (frequent trips, emissions, and waste).
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">
                Key Metrics at a Glance
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <div className="bg-indigo-50 p-3 md:p-4 rounded-lg text-center">
                  <p className="text-xs md:text-sm text-indigo-800">
                    Avg. Delivery Time
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-indigo-700">
                    {deliveryData?.avgDeliveryTime || "--"} mins
                  </p>
                </div>
                <div className="bg-teal-50 p-3 md:p-4 rounded-lg text-center">
                  <p className="text-xs md:text-sm text-teal-800">
                    Impulse Purchases
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-teal-700">
                    {consumerData?.impulsePurchaseRate || "--"}%
                  </p>
                </div>
                <div className="bg-emerald-50 p-3 md:p-4 rounded-lg text-center">
                  <p className="text-xs md:text-sm text-emerald-800">
                    CO2 Emissions
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-emerald-700">
                    {environmentData?.co2Emissions
                      ? environmentData.co2Emissions.toLocaleString()
                      : "--"}{" "}
                    kg
                  </p>
                </div>
                <div className="bg-rose-50 p-3 md:p-4 rounded-lg text-center">
                  <p className="text-xs md:text-sm text-rose-800">
                    Worker Turnover
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-rose-700">
                    {laborData?.turnoverRate || "--"}%
                  </p>
                </div>
              </div>
            </section>

            {/* Problem Overview lmvl*/}
            <section className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">
                The Quick Commerce Challenge
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                <div className={`p-3 md:p-5 rounded-lg ${colors.secondary}`}>
                  <h3 className="text-sm md:text-base font-medium text-indigo-800 mb-1 md:mb-2">
                    Consumer Behavior
                  </h3>
                  <p className="text-xs md:text-sm">
                    Increased impulse buying, higher speed expectations, reduced
                    planning habits
                  </p>
                </div>
                <div className={`p-3 md:p-5 rounded-lg ${colors.danger}`}>
                  <h3 className="text-sm md:text-base font-medium text-rose-800 mb-1 md:mb-2">
                    Labor Conditions
                  </h3>
                  <p className="text-xs md:text-sm">
                    Worker stress, time pressure, risk-taking behavior, high
                    turnover
                  </p>
                </div>
                <div className={`p-3 md:p-5 rounded-lg ${colors.success}`}>
                  <h3 className="text-sm md:text-base font-medium text-emerald-800 mb-1 md:mb-2">
                    Environmental Impact
                  </h3>
                  <p className="text-xs md:text-sm">
                    Increased emissions, packaging waste, energy consumption
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Explore Our Analysis
              </h2>
              <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                Use the tabs above to navigate through our comprehensive
                analysis of quick commerce dynamics
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setActiveTab("data")}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm md:text-base"
                >
                  View Data Insights
                </button>
                <button
                  onClick={() => setActiveTab("solutions")}
                  className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 text-sm md:text-base"
                >
                  See Proposed Solutions
                </button>
                <a
                  className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 text-sm md:text-base"
                  href=""
                >
                  Link to Video
                </a>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Quick Commerce Dynamics | Group 117</title>
        <meta
          name="description"
          content="Analyzing the impact of quick commerce in India"
        />
      </Head>

      <header className={`${colors.primary} text-white shadow-lg`}>
        <div className="container mx-auto px-4">
          <div className="py-3 md:py-4">
            <h1 className="text-xl md:text-4xl font-bold">
              Quick Commerce Dynamics
            </h1>
            <p className="mt-1 text-xs md:text-sm opacity-90">
              Group 117 - Systems Thinking Project
            </p>
          </div>

          <nav className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-3 py-2 md:px-4 md:py-2 text-xs md:text-lg font-medium whitespace-nowrap ${
                activeTab === "overview"
                  ? "bg-white text-indigo-700"
                  : "text-white hover:bg-teal-500 hover:bg-opacity-30"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("data")}
              className={`px-3 py-2 md:px-4 md:py-2 text-xs md:text-lg font-medium whitespace-nowrap ${
                activeTab === "data"
                  ? "bg-white text-indigo-700"
                  : "text-white hover:bg-teal-500 hover:bg-opacity-30"
              }`}
            >
              Data Insights
            </button>
            <button
              onClick={() => setActiveTab("analysis")}
              className={`px-3 py-2 md:px-4 md:py-2 text-xs md:text-lg font-medium whitespace-nowrap ${
                activeTab === "analysis"
                  ? "bg-white text-indigo-700"
                  : "text-white hover:bg-teal-500 hover:bg-opacity-30"
              }`}
            >
              System Analysis
            </button>
            <button
              onClick={() => setActiveTab("solutions")}
              className={`px-3 py-2 md:px-4 md:py-2 text-xs md:text-lg font-medium whitespace-nowrap ${
                activeTab === "solutions"
                  ? "bg-white text-indigo-700"
                  : "text-white hover:bg-teal-500 hover:bg-opacity-30"
              }`}
            >
              Solutions
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-4 md:py-8">
        {renderTabContent()}
      </main>

      <footer className="bg-gray-800 text-white py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-base md:text-lg font-semibold">
                Quick Commerce Dynamics
              </h3>
              <p className="text-xs md:text-sm text-gray-400 mt-1">
                Group 117 - Systems Thinking Project
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
