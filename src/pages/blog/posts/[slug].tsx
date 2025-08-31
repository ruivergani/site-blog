import { useRouter } from "next/router";

export default function PostPage() {

  const router = useRouter();
  console.log(router.query.slug)
  return (
    <div>
      <h2 className="text-2xl font-bold text-purple-500">PostPage</h2>
    </div>
  );
}
