import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchStudents, getLocalStudents } from "@/services/studentService";
import { Student } from "@/types/student";
import { Users, GraduationCap, UserCheck, UserX } from "lucide-react";

const Dashboard = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStudents = async () => {
      setLoading(true);
      try {
        const apiStudents = await fetchStudents();
        const localStudents = getLocalStudents();
        setStudents([...apiStudents, ...localStudents]);
      } catch (error) {
        console.error('Error loading students:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStudents();
  }, []);

  const activeStudents = students.filter(s => s.status === 'active').length;
  const graduatedStudents = students.filter(s => s.status === 'graduated').length;
  const inactiveStudents = students.filter(s => s.status === 'inactive').length;

  const stats = [
    {
      title: "Total Students",
      value: students.length,
      icon: Users,
      description: "All registered students"
    },
    {
      title: "Active Students", 
      value: activeStudents,
      icon: UserCheck,
      description: "Currently enrolled"
    },
    {
      title: "Graduated",
      value: graduatedStudents,
      icon: GraduationCap,
      description: "Completed courses"
    },
    {
      title: "Inactive",
      value: inactiveStudents,
      icon: UserX,
      description: "Not currently enrolled"
    }
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-hero rounded-lg p-8 text-primary-foreground shadow-medium">
        <h1 className="text-3xl font-bold mb-2">Welcome to Student Management</h1>
        <p className="text-lg opacity-90">
          Manage your students efficiently with Quorium Consulting's comprehensive system
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="bg-gradient-card shadow-soft hover:shadow-medium transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Overview */}
      <Card className="bg-gradient-card shadow-soft">
        <CardHeader>
          <CardTitle>Quick Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {((activeStudents / students.length) * 100 || 0).toFixed(1)}%
              </div>
              <p className="text-sm text-muted-foreground">Active Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {courses.length}
              </div>
              <p className="text-sm text-muted-foreground">Available Courses</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {new Date().getFullYear()}
              </div>
              <p className="text-sm text-muted-foreground">Current Academic Year</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const courses = [
  "Computer Science", "Business Administration", "Engineering", "Psychology",
  "Mathematics", "Biology", "Chemistry", "Physics", "Economics", "Literature"
];

export default Dashboard;