"use client";

export default function InviteFriend({ params }: { params: { id: string } }) {
  const copyUrl = () => {
    const url = `${location.origin}/rooms/${id}`;
    navigator.clipboard.writeText(url);
  };

  const { id } = params;
  return (
    <div>
      <button onClick={copyUrl}>Invite your friends</button>
    </div>
  );
}
