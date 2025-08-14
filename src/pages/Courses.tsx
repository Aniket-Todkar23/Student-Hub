import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, GraduationCap } from "lucide-react";

interface Course {
  id: string;
  name: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  enrolledStudents: number;
  category: string;
}

const Courses = () => {
  const courses: Course[] = [
    {
      id: "cs-101",
      name: "Computer Science",
      description: "Comprehensive program covering programming fundamentals, algorithms, data structures, and software engineering principles.",
      duration: "4 Years",
      level: "Beginner",
      enrolledStudents: 245,
      category: "Technology"
    },
    {
      id: "ba-101", 
      name: "Business Administration",
      description: "Strategic business management, leadership principles, marketing, finance, and organizational behavior for future executives.",
      duration: "3 Years",
      level: "Intermediate",
      enrolledStudents: 189,
      category: "Business"
    },
    {
      id: "eng-101",
      name: "Engineering",
      description: "Applied engineering principles, design thinking, project management, and technical problem-solving across multiple disciplines.",
      duration: "4 Years", 
      level: "Advanced",
      enrolledStudents: 167,
      category: "Technology"
    },
    {
      id: "psy-101",
      name: "Psychology",
      description: "Human behavior analysis, cognitive psychology, research methods, and therapeutic intervention strategies.",
      duration: "3 Years",
      level: "Beginner",
      enrolledStudents: 134,
      category: "Social Sciences"
    },
    {
      id: "math-101",
      name: "Mathematics",
      description: "Advanced mathematical concepts, statistical analysis, calculus, linear algebra, and mathematical modeling.",
      duration: "3 Years",
      level: "Advanced",
      enrolledStudents: 98,
      category: "Sciences"
    },
    {
      id: "bio-101",
      name: "Biology",
      description: "Life sciences fundamentals, cellular biology, genetics, ecology, and biotechnology applications.",
      duration: "4 Years",
      level: "Intermediate",
      enrolledStudents: 156,
      category: "Sciences"
    },
    {
      id: "chem-101",
      name: "Chemistry",
      description: "Chemical principles, organic and inorganic chemistry, laboratory techniques, and industrial applications.",
      duration: "4 Years",
      level: "Advanced",
      enrolledStudents: 112,
      category: "Sciences"
    },
    {
      id: "phy-101",
      name: "Physics",
      description: "Fundamental physics concepts, quantum mechanics, thermodynamics, and experimental research methods.",
      duration: "4 Years",
      level: "Advanced",
      enrolledStudents: 87,
      category: "Sciences"
    },
    {
      id: "econ-101",
      name: "Economics",
      description: "Economic theory, market analysis, financial systems, policy development, and global economic trends.",
      duration: "3 Years",
      level: "Intermediate",
      enrolledStudents: 143,
      category: "Business"
    },
    {
      id: "lit-101",
      name: "Literature",
      description: "Literary analysis, creative writing, comparative literature, and cultural studies across historical periods.",
      duration: "3 Years",
      level: "Beginner",
      enrolledStudents: 76,
      category: "Humanities"
    }
  ];

  const getLevelColor = (level: Course['level']) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    }
  };

  const categories = [...new Set(courses.map(course => course.category))];
  const totalStudents = courses.reduce((sum, course) => sum + course.enrolledStudents, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-hero rounded-lg p-8 text-primary-foreground shadow-medium">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="h-8 w-8" />
          <div>
            <h1 className="text-3xl font-bold">Course Catalog</h1>
            <p className="text-lg opacity-90">
              Explore our comprehensive range of academic programs
            </p>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold">{courses.length}</div>
            <div className="text-sm opacity-90">Available Courses</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold">{categories.length}</div>
            <div className="text-sm opacity-90">Categories</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-2xl font-bold">{totalStudents.toLocaleString()}</div>
            <div className="text-sm opacity-90">Total Enrolled</div>
          </div>
        </div>
      </div>

      {/* Courses by Category */}
      {categories.map((category) => {
        const categoryCourses = courses.filter(course => course.category === category);
        
        return (
          <div key={category} className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-foreground">{category}</h2>
              <Badge variant="secondary" className="text-xs">
                {categoryCourses.length} courses
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryCourses.map((course) => (
                <Card key={course.id} className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-200">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <Badge className={getLevelColor(course.level)}>
                        {course.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {course.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-3 w-3" />
                        <span>{course.enrolledStudents} students</span>
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-border">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Course ID: {course.id}</span>
                        <GraduationCap className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;