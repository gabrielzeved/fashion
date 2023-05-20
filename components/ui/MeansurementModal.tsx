export interface Props {
  Title: string;
  SubTitle: string;
  Columns: Column[];
}

interface Column {
  ColumnTitle: string;
  ColumnItems: Array<string>;
}

const MeansurementModal = ({ Title, SubTitle, Columns }: Props) => {
  const numberOfColumns = `grid-cols-${Columns.length}`;
  return (
    <div className="fixed w-full h-full bg-black/[.01] ">
      <div class="hidden lg:block lg:w-5/12">
        <img src="" alt="" />
      </div>

      <div className="modal-box relative mx-auto max-w-full max-h-full w-full h-full p-4 lg:w-5/12">
        <label className="btn btn-sm btn-circle bg-white border-base-300 text-black absolute right-4 top-4 hover:bg-white">
          ✕
        </label>
        <h3 className="text-base-500 text-2xl m-0 font-normal">
          {Title}
        </h3>
        <p className="py-5 text-base-500 text-base font-normal">
          {SubTitle}
        </p>

        <div class={`grid ${numberOfColumns}`}>
          {Columns.map((column) => {
            return (
              <div class="flex flex-col items-center justify-center">
                <p class="text-center w-full mb-8">{column.ColumnTitle}</p>

                <div>
                  {column.ColumnItems.map((item) => (
                    <div class="text-center w-full my-2">{item}</div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MeansurementModal;
