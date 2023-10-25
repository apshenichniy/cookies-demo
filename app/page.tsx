import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
import { Metadata } from "next/types";
import { ClientComponent } from "./ClientComponent";

export const metadata: Metadata = {
  title: "HTTP only cookies demo",
};

export default function HomePage() {
  const cookieStore = cookies();
  const cookie = cookieStore.get("my-cookie");

  return (
    <div className="grid p-6 gap-3">
      <h1 className="font-medium text-lg">
        Set/clear HTTP only cookie using server action
      </h1>
      <div className="font-medium">Cookie value: {cookie?.value}</div>
      <div className="grid grid-cols-2 max-w-xs">
        <form>
          <Button
            formAction={async () => {
              "use server";
              cookies().set("my-cookie", "my-value", {
                path: "/",
                httpOnly: true,
              });
            }}
          >
            Set cookie
          </Button>
        </form>
        <form>
          <Button
            type="submit"
            formAction={async () => {
              "use server";
              cookies().delete("my-cookie");
            }}
          >
            Clear cookie
          </Button>
        </form>
      </div>
      <ClientComponent />
    </div>
  );
}
