import News from "@/components/News/News";

export default function New({ params: { lng } }: { params: { lng: string } }) {
  return <News lng={lng} />;
}
