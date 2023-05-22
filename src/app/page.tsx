import collectionItems from "@/config/collectionItems"
import BannerCarousel from "./components/BannerCarousel"
import CollectionsCarousel from "./components/CollectionsCarousel"

export default function Home() {
  return (
    <>
      <BannerCarousel />
      <CollectionsCarousel items={collectionItems} />
    </>
  )
}
