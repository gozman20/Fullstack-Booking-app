import prisma from "@/app/libs/prismadb";

interface Iparams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

export default async function getReservations(params: Iparams) {
  try {
    const { listingId, userId, authorId } = params;
    const query: any = {};
    if (listingId) {
      query.listingId = listingId;
    }
    if (userId) {
      query.userId = userId;
    }
    if (authorId) {
      query.listing = { userId: authorId };
    }
    //Find the reservation based on  the query passed above
    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeRservations = reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt,
      startDate: reservation.startDate,
      endDate: reservation.endDate,
      listing: {
        ...reservation.listing,
        createdAt: reservation.listing.createdAt.toISOString(),
      },
    }));
    return safeRservations;
  } catch (err: any) {
    throw new Error(err);
  }
}
