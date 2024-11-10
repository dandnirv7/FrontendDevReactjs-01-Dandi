import { Review as ReviewData } from "@/interfaces";
import { GrStar, GrStarOutline } from "react-icons/gr";
import Rating from "react-rating";

interface ReviewProps {
  reviews: ReviewData[];
}

const Review: React.FC<ReviewProps> = ({ reviews }) => {
  return (
    <div className="mt-5">
      <h1 className="text-2xl font-semibold capitalize">Review Customer</h1>
      <div className="flex flex-col gap-5">
        {reviews.map((review) => (
          <div key={review.id} className="w-full p-5 border-b rounded-xl">
            <div className="flex flex-row items-start gap-4">
              <img
                src={review.profile_path}
                alt="profile"
                className="object-cover w-16 h-16 bg-gray-100 bg-center rounded-full"
              />
              <div className="flex flex-col w-full gap-2">
                <div>
                  <h2 className="font-semibold capitalize">{review.name}</h2>
                  <Rating
                    initialRating={review.rating}
                    readonly
                    fullSymbol={<GrStar className="text-[#002b56] size-5" />}
                    emptySymbol={
                      <GrStarOutline className="text-[#002b56] size-5" />
                    }
                  />
                </div>
                <p className="text-gray-700">{review.text}</p>
                <div className="flex flex-row gap-2">
                  {review.pictures.map((picture) => (
                    <img
                      src={picture}
                      alt=""
                      className="object-cover w-32 h-32 bg-center"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
