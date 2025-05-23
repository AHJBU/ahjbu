
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus, FileText, FolderKanban, BookOpenText, BookOpen } from "lucide-react";
import { DatabaseStats } from "@/components/dashboard/DatabaseStats";
import { RecentPostsList } from "@/components/dashboard/RecentPostsList";
import { AnalyticsDashboard } from "@/components/dashboard/AnalyticsDashboard";

const Dashboard = () => {
  const { language } = useLanguage();

  return (
    <DashboardLayout title={language === "en" ? "Dashboard" : "لوحة التحكم"}>
      {/* Stats Cards */}
      <DatabaseStats />
      
      {/* Analytics Dashboard */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>
            {language === "en" ? "Analytics" : "التحليلات"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AnalyticsDashboard />
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>
            {language === "en" ? "Quick Actions" : "إجراءات سريعة"}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button asChild>
            <Link to="/dashboard/blog/editor">
              <FileText className="h-4 w-4 mr-2" />
              {language === "en" ? "New Blog Post" : "منشور مدونة جديد"}
            </Link>
          </Button>
          
          <Button asChild variant="outline">
            <Link to="/dashboard/projects/editor">
              <FolderKanban className="h-4 w-4 mr-2" />
              {language === "en" ? "New Project" : "مشروع جديد"}
            </Link>
          </Button>
          
          <Button asChild variant="secondary">
            <Link to="/dashboard/courses/editor">
              <BookOpen className="h-4 w-4 mr-2" />
              {language === "en" ? "New Course" : "دورة جديدة"}
            </Link>
          </Button>
          
          <Button asChild variant="outline">
            <Link to="/dashboard/publications/editor">
              <BookOpenText className="h-4 w-4 mr-2" />
              {language === "en" ? "New Publication" : "منشور جديد"}
            </Link>
          </Button>
          
          <Button asChild variant="outline">
            <Link to="/dashboard/settings">
              {language === "en" ? "Site Settings" : "إعدادات الموقع"}
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <RecentPostsList />
    </DashboardLayout>
  );
};

export default Dashboard;
