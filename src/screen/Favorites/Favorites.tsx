import { useAppSelector } from "@/hooks"

const Favorites = () => {
    const { favourites } = useAppSelector(store => store.favorite)

  return (
    <>
        <section className="w-full min-h-screen">
            {
                favourites.map((item: any) => (''))
            }
        </section>
    </>
  )
}

export {Favorites}