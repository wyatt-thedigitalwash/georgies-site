// Renders a JSON-LD structured-data script. Safe: input is our own data,
// serialized with JSON.stringify (no user input).
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
