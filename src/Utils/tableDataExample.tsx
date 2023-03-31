import { createColumnHelper } from "@tanstack/react-table";

type UnitConversion = {
    fromUnit: string;
    toUnit: string;
    factor: number;
  };
  
  export const data: UnitConversion[] = [
    {
      fromUnit: "inches",
      toUnit: "millimetres (mm)",
      factor: 25.4
    },
    {
      fromUnit: "feet",
      toUnit: "centimetres (cm)",
      factor: 30.48
    },
    {
      fromUnit: "yards",
      toUnit: "metres (m)",
      factor: 0.91444
    },
    {
        fromUnit: "inches",
        toUnit: "millimetres (mm)",
        factor: 25.4
      },
      {
        fromUnit: "feet",
        toUnit: "centimetres (cm)",
        factor: 30.48
      },
      {
        fromUnit: "yards",
        toUnit: "metres (m)",
        factor: 0.91444
      },
      {
        fromUnit: "inches",
        toUnit: "millimetres (mm)",
        factor: 25.4
      },
      {
        fromUnit: "feet",
        toUnit: "centimetres (cm)",
        factor: 30.48
      },
      {
        fromUnit: "yards",
        toUnit: "metres (m)",
        factor: 0.91444
      },
      {
          fromUnit: "inches",
          toUnit: "millimetres (mm)",
          factor: 25.4
        },
        {
          fromUnit: "feet",
          toUnit: "centimetres (cm)",
          factor: 30.48
        },
        {
          fromUnit: "yards",
          toUnit: "metres (m)",
          factor: 0.91444
        },
        {
            fromUnit: "inches",
            toUnit: "millimetres (mm)",
            factor: 25.4
          },
          {
            fromUnit: "feet",
            toUnit: "centimetres (cm)",
            factor: 30.48
          },
          {
            fromUnit: "yards",
            toUnit: "metres (m)",
            factor: 0.91444
          },
          {
              fromUnit: "inches",
              toUnit: "millimetres (mm)",
              factor: 25.4
            },
            {
              fromUnit: "feet",
              toUnit: "centimetres (cm)",
              factor: 30.48
            },
            {
              fromUnit: "yards",
              toUnit: "metres (m)",
              factor: 0.91444
            },
            {
                fromUnit: "inches",
                toUnit: "millimetres (mm)",
                factor: 25.4
              },
              {
                fromUnit: "feet",
                toUnit: "centimetres (cm)",
                factor: 30.48
              },
              {
                fromUnit: "yards",
                toUnit: "metres (m)",
                factor: 0.91444
              },
              {
                  fromUnit: "inches",
                  toUnit: "millimetres (mm)",
                  factor: 25.4
                },
                {
                  fromUnit: "feet",
                  toUnit: "centimetres (cm)",
                  factor: 30.48
                },
                {
                  fromUnit: "yards",
                  toUnit: "metres (m)",
                  factor: 0.91444
                },
                {
                    fromUnit: "inches",
                    toUnit: "millimetres (mm)",
                    factor: 25.4
                  },
                  {
                    fromUnit: "feet",
                    toUnit: "centimetres (cm)",
                    factor: 30.48
                  },
                  {
                    fromUnit: "yards",
                    toUnit: "metres (m)",
                    factor: 0.91444
                  },
                  {
                      fromUnit: "inches",
                      toUnit: "millimetres (mm)",
                      factor: 25.4
                    },
                    {
                      fromUnit: "feet",
                      toUnit: "centimetres (cm)",
                      factor: 30.48
                    },
                    {
                      fromUnit: "yards",
                      toUnit: "metres (m)",
                      factor: 0.91444
                    },
                    {
                        fromUnit: "inches",
                        toUnit: "millimetres (mm)",
                        factor: 25.4
                      },
                      {
                        fromUnit: "feet",
                        toUnit: "centimetres (cm)",
                        factor: 30.48
                      },
                      {
                        fromUnit: "yards",
                        toUnit: "metres (m)",
                        factor: 0.91444
                      },
                      {
                          fromUnit: "inches",
                          toUnit: "millimetres (mm)",
                          factor: 25.4
                        },
                        {
                          fromUnit: "feet",
                          toUnit: "centimetres (cm)",
                          factor: 30.48
                        },
                        {
                          fromUnit: "yards",
                          toUnit: "metres (m)",
                          factor: 0.91444
                        },
                        {
                            fromUnit: "inches",
                            toUnit: "millimetres (mm)",
                            factor: 25.4
                          },
                          {
                            fromUnit: "feet",
                            toUnit: "centimetres (cm)",
                            factor: 30.48
                          },
                          {
                            fromUnit: "yards",
                            toUnit: "metres (m)",
                            factor: 0.91444
                          },
                          {
                              fromUnit: "inches",
                              toUnit: "millimetres (mm)",
                              factor: 25.4
                            },
                            {
                              fromUnit: "feet",
                              toUnit: "centimetres (cm)",
                              factor: 30.48
                            },
                            {
                              fromUnit: "yards",
                              toUnit: "metres (m)",
                              factor: 0.91444
                            },
                            {
                                fromUnit: "inches",
                                toUnit: "millimetres (mm)",
                                factor: 25.4
                              },
                              {
                                fromUnit: "feet",
                                toUnit: "centimetres (cm)",
                                factor: 30.48
                              },
                              {
                                fromUnit: "yards",
                                toUnit: "metres (m)",
                                factor: 0.91444
                              },
                              {
                                  fromUnit: "inches",
                                  toUnit: "millimetres (mm)",
                                  factor: 25.4
                                },
                                {
                                  fromUnit: "feet",
                                  toUnit: "centimetres (cm)",
                                  factor: 30.48
                                },
                                {
                                  fromUnit: "yards",
                                  toUnit: "metres (m)",
                                  factor: 0.91444
                                },
                                {
                                    fromUnit: "inches",
                                    toUnit: "millimetres (mm)",
                                    factor: 25.4
                                  },
                                  {
                                    fromUnit: "feet",
                                    toUnit: "centimetres (cm)",
                                    factor: 30.48
                                  },
                                  {
                                    fromUnit: "yards",
                                    toUnit: "metres (m)",
                                    factor: 0.91444
                                  },
                                  {
                                      fromUnit: "inches",
                                      toUnit: "millimetres (mm)",
                                      factor: 25.4
                                    },
                                    {
                                      fromUnit: "feet",
                                      toUnit: "centimetres (cm)",
                                      factor: 30.48
                                    },
                                    {
                                      fromUnit: "yards",
                                      toUnit: "metres (m)",
                                      factor: 0.91444
                                    },
                                    {
                                        fromUnit: "inches",
                                        toUnit: "millimetres (mm)",
                                        factor: 25.4
                                      },
                                      {
                                        fromUnit: "feet",
                                        toUnit: "centimetres (cm)",
                                        factor: 30.48
                                      },
                                      {
                                        fromUnit: "yards",
                                        toUnit: "metres (m)",
                                        factor: 0.91444
                                      },
                                      {
                                          fromUnit: "inches",
                                          toUnit: "millimetres (mm)",
                                          factor: 25.4
                                        },
                                        {
                                          fromUnit: "feet",
                                          toUnit: "centimetres (cm)",
                                          factor: 30.48
                                        },
                                        {
                                          fromUnit: "yards",
                                          toUnit: "metres (m)",
                                          factor: 0.91444
                                        },

  ];
  
  const columnHelper = createColumnHelper<UnitConversion>();
  
  export const columns = [
    columnHelper.accessor("fromUnit", {
      cell: (info) => info.getValue(),
      header: "To convert"
    }),
    columnHelper.accessor("toUnit", {
      cell: (info) => info.getValue(),
      header: "Into"
    }),
    columnHelper.accessor("factor", {
      cell: (info) => info.getValue(),
      header: "Multiply by",
      meta: {
        isNumeric: true
      }
    })
  ];