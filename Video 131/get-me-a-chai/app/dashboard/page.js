// "use client"
// import React from 'react'
// import { useRouter } from 'next/navigation'
// import { useSession, signIn, signOut } from 'next-auth/react'

// const Dashboard = () => {
//   const { data: session } = useSession()

//   if (!session) {
//     const router = useRouter()
//     router.push('/login')
//   }
//   return (
//     <div>
//       Dashboard
//     </div>
//   )
// }

// export default Dashboard


import Dashboard from '@/components/Dashboard';

const DashboardPage = () => {
  return (
    <Dashboard />
  )
}

export default DashboardPage

export const metadata = {
  title: "Dashboard - Get Me A Chai",
  description: "Access your personalized dashboard on Get Me A Chai, where you can manage your profile, view your supporters, and track your funding progress. Stay connected with your fans and grow your creative journey.",
}