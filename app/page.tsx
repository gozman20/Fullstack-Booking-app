import Image from "next/image";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import getListings, { IListingsParams } from "./actions/getListings";
import ListingCard from "./components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";

// interface IListingsParams {
//   userId?: string;
// }

interface HomeProps {
  params: IListingsParams;
}

const Home = async ({ params }: HomeProps) => {
  const currentUser = await getCurrentUser();
  const listings = await getListings(params);
  if (listings.length === 0) {
    return (
      <ClientOnly>
        <Container>
          <EmptyState showReset />
        </Container>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 ">
          {listings.map((listing: any) => {
            return (
              <ListingCard
                key={listing.id}
                data={listing}
                currentUser={currentUser}
              />
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
};
export default Home;
