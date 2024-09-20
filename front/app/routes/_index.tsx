import { type MetaFunction } from "@remix-run/node";
import { ApiHomeHome } from "../types/generated/contentTypes";
import { useLoaderData } from "@remix-run/react";
import { StrapiSlicesZoneComponent } from "~/utils/strapi/StrapiSlicesZoneComponent";
import components from "~/utils/strapi/componentMap";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const response = await fetch("http://127.0.0.1:1337/api/home?populate=deep");
  return response;
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const home: ApiHomeHome = data.data;
  console.log("HOME", home.attributes.sliceszone);
  return (
    <div className="flex h-screen items-center justify-center">
      <StrapiSlicesZoneComponent
        components={components}
        entries={home.attributes.sliceszone}
      />
    </div>
  );
}
