import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservation";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";

const ReservationPage = async () => {
  const currentUser = await getCurrentUser();
  // const reservation=await getReservations()
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorised" subtitle="please login " />
      </ClientOnly>
    );
  }

  return <div>Hi</div>;
};

export default ReservationPage;
