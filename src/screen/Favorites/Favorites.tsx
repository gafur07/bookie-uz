import useAppSelector from "@/hooks/useAppSelector"

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

export default Favorites