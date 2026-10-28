export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  github?: string;
  image: string;
  tags: string[];
  category?: string;
  status?: string;
  featured?: boolean;
}

export async function fetchProjects(): Promise<Project[]> {
  try {
    const res = await fetch("/project.json", { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to load project.json");
    }
    return await res.json();
  } catch (err) {
    console.error("Error fetching projects:", err);
    return [];
  }
}
