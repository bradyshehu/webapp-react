export default function ReviewCard({ review }) {
  return (
    <div className="py-2 gap-3 border-bottom d-flex justify-content-between">
      <div className="w-25">{review.name}</div>
      <div className="flex-grow-1">{review.text}</div>
      <div>{review.vote}</div>
    </div>
  );
}
