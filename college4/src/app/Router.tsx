import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from '@/pages/Home';
import { AboutPage } from '@/pages/About';
import { AdmissionsPage } from '@/pages/Admissions';
import { AcademicsPage } from '@/pages/Academics';
import { DepartmentPage } from '@/pages/Department';
import { CampusLifePage } from '@/pages/CampusLife';
import { EventsPage } from '@/pages/Events';
import { NewsPage } from '@/pages/News';
import { NewsArticlePage } from '@/pages/NewsArticle';
import { ContactPage } from '@/pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'admissions',
        element: <AdmissionsPage />,
      },
      {
        path: 'academics',
        element: <AcademicsPage />,
      },
      {
        path: 'departments/:slug',
        element: <DepartmentPage />,
      },
      {
        path: 'campus-life',
        element: <CampusLifePage />,
      },
      {
        path: 'events',
        element: <EventsPage />,
      },
      {
        path: 'news',
        element: <NewsPage />,
      },
      {
        path: 'news/:slug',
        element: <NewsArticlePage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
