export default function ProjectDetails({
  params,
}: {
  params: { projectId: string };
}) {
  return <h1>Details about product{params.projectId}</h1>;
}
