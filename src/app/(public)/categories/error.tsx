"use client";

export default function Error({
  error: _e,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-20">
      <h1 className="mb-4 text-2xl font-bold">
        Ops, ocorreu um erro ao carregar as categorias
      </h1>

      <button
        className="rounded-md bg-red-ufal px-4 py-2 font-semibold text-white-100"
        onClick={() => reset()}
      >
        Tente novamente
      </button>
    </div>
  );
}
