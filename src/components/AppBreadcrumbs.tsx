import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const LABEL_OVERRIDES: Record<string, string> = {
  blogs: "Blogs",
};

const toTitleCase = (segment: string) =>
  segment
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const AppBreadcrumbs = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    const label = LABEL_OVERRIDES[segment] ?? toTitleCase(segment);

    return { href, label };
  });

  return (
    <Breadcrumb className="hidden sm:block" aria-label="Site breadcrumbs">
      <BreadcrumbList>
        <BreadcrumbItem>
          {crumbs.length === 0 ? (
            <BreadcrumbPage>Home</BreadcrumbPage>
          ) : (
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {crumbs.map((crumb, index) => (
          <Fragment key={crumb.href}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {index === crumbs.length - 1 ? (
                <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={crumb.href}>{crumb.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AppBreadcrumbs;
