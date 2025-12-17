import React from "react";

export const createBlocks = (results) => [
  {
    //  c1 = 上柱の検討 (Consideration of upper pillars) and 荷重計算 (Load calculation)
    id: "c1",
    node: (
      <section>
        {/* Main-section: 3. 上柱の検討 (Consideration of upper pillars) + material specifications */}
        <h2 className="page1-title">
          <span className="page1-number">3.</span>
          <span className="page1-text tracking-[0.1em] jp">
            {results?.[0]?.description ?? ""}
          </span>
          <span className="page1-text ml-[18px] jp">φ</span>
          <span className="page1-text">
            {results?.[0]?.diaLower?.toFixed(1) ?? ""}
          </span>
          <span className="page1-text px-[2px] text-[10.5pt]">×</span>
          <span className="page1-text">
            t{results?.[0]?.thickLower?.toFixed(1) ?? ""}
          </span>
          <span className="page1-text ml-[20px]">
            {results?.[0]?.material ?? ""}
          </span>
          <span className="page1-text ml-[20px]">
            Z = {results?.[0]?.SecMdl?.toFixed(2) ?? ""} cm<sup>3</sup>
          </span>
        </h2>

        <div className="flex flex-col mb-[20px]">
          {/* Sub-section: 1) 荷重計算 (Load calculation) */}
          <div className="flex justify-start ml-[22px] mb-0">
            <span className="page1-number">1).</span>
            <span className="page1-text tracking-[0.1em] jp">荷重計算</span>
          </div>

          <div className="ml-[25px]">
            {/*
              Load table:
              - Dead load (固定荷重)
              - Wind load (風荷重)
              - Used to find:
              N1 = vertical force
              Pmax1 = maximum horizontal force
            */}
            <table className="tables-pages">
              <thead>
                {/* Header Line 1 */}
                <tr className="tracking-[0.1em] jp">
                  <th className="col-num" rowspan={2}></th>
                  <th rowspan={2}>名 称</th>
                  <th className="col-left" colspan={1}>
                    単位重量
                  </th>
                  <th className="col-left" rowspan={2}>
                    個数
                  </th>
                  <th className="col-left" rowspan={1}>
                    固定荷重
                  </th>
                  <th className="col-gap"></th>
                  <th className="col-right" colspan={1}>
                    受風面積
                  </th>
                  <th className="col-right" colspan={1}>
                    風力係数
                  </th>
                  <th className="col-right" colspan={1}>
                    単位風荷重
                  </th>
                  <th className="col-right" colspan={1}>
                    個数
                  </th>
                  <th className="col-right" colspan={1}>
                    風荷重
                  </th>
                </tr>

                {/* Header line 2 (unit) */}
                <tr>
                  <th className="col-left">W(N)</th>
                  <th className="col-left">(N)</th>
                  <th className="col-gap"></th>
                  <th className="col-right">
                    (m<sup>2</sup>)
                  </th>
                  <th className="col-right">C</th>
                  <th className="col-right">P(N)</th>
                  <th className="tracking-[0.1em] jp">(受風物)</th>
                  <th className="col-right">(N)</th>
                </tr>
              </thead>

              <tbody>
                {/* Item 1 */}
                <tr>
                  <td className="col-num">1</td>
                  <td className="col-1 tracking-[0.1em] jp">灯具</td>
                  <td className="col-left">36.3</td>
                  <td className="col-left">1</td>
                  <td className="col-left">36.3</td>
                  <td className="col-gap"></td>
                  <td className="col-right">0.065</td>
                  <td className="col-right">1.0</td>
                  <td className="col-right">143.9</td>
                  <td className="col-right">1</td>
                  <td className="col-right">143.9</td>
                </tr>

                {/* Item 2 */}
                <tr>
                  <td className="col-num">2</td>
                  <td className="col-1 tracking-[0.1em] jp">上柱</td>
                  <td className="col-left">149.6</td>
                  <td className="col-left">1</td>
                  <td className="col-left">149.6</td>
                  <td className="col-gap"></td>
                  <td className="col-right">0.200</td>
                  <td className="col-right">0.7</td>
                  <td className="col-right">310.0</td>
                  <td className="col-right">1</td>
                  <td className="col-right">310.0</td>
                </tr>
              </tbody>

              {/* Total N1(vertical force) dan Pmax 1(horizontal force) */}
              <tfoot>
                <tr>
                  <td className="col-num"></td>
                  <td className="col-1-tf"></td>
                  <td colspan={2} className="tfoot-title col-left">
                    <span className="tracking-[0.1em] jp">鉛直力 </span>N1=
                  </td>
                  <td className="tfoot-value col-left">185.9</td>
                  <td className="col-gap"></td>
                  <td colspan={4} className="tfoot-title col-right">
                    <span className="tracking-[0.1em] jp">水平力 </span>
                    Pmax1=
                  </td>
                  <td colspan={1} className="tfoot-value col-right">
                    453.9
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    ),
  },
  {
    // c2 = 風時曲げモーメント (Bending Moment due to Wind)
    id: "c2",
    node: (
      <section>
        {/* Sub-section: 2) 風時曲げモーメント (Bending Moment due to Wind) */}
        <div className="flex flex-col mb-[20px]">
          <div className="flex justify-start ml-[22px] mb-0">
            <span className="page1-number">2).</span>
            <span className="page1-text tracking-[0.1em] jp">
              風時曲げモーメント
            </span>
          </div>

          {/* Moment formula */}
          <div className="flex justify-start ml-[44px]">
            <span className="mr-[8px]">Mp1 =</span>
            <span className="mr-[8px]">P1・(H4-H3)+P2・H2/2 =</span>
            <span>709.8 N・m</span>
          </div>
        </div>
      </section>
    ),
  },
  {
    // c3 = 曲げ応力度 (Bending Stress)
    id: "c3",
    node: (
      <section>
        {/* Sub-section: 3) 曲げ応力度 (Bending Stress) */}
        <div className="flex flex-col mb-[20px]">
          <div className="flex justify-start ml-[22px] mb-0">
            <span className="page1-number">3).</span>
            <span className="page1-text tracking-[0.1em] jp">曲げ応力度</span>
          </div>

          {/* Bending stress calculation */}
          <div className="flex justify-start ml-[44px]">
            <span className="mr-[8px] tracking-[0.1em]">cσb =</span>
            <span className="mr-[8px]">Mp1/Z =</span>
            <span>
              39.7 N/mm<sup>2</sup>
            </span>
          </div>

          {/* Checking the ratio to allowable stress */}
          <div className="ml-[68px] leading-none inline-block">
            <div className="inline-block">
              <div className="flex items-center whitespace-nowrap">
                <div className="flex flex-col items-center">
                  <div className="border-b border-black pb-[3px] tracking-[0.1em] px-1.5">
                    cσb
                  </div>
                  <div className="mt-[3px] tracking-[0.05em]">sfb</div>
                </div>
                <div className="mx-2">=</div>
                <div className="flex flex-col items-center">
                  <div className="border-b border-black pb-[3px] px-1.5">
                    39.7
                  </div>
                  <div className="mt-[3px]">235</div>
                </div>
                <div className="mx-2">=</div>
                <div className="flex items-center">
                  <span>0.169</span>
                  <span className="mx-3.5">&lt;</span>
                  <span className="pr-4">1.0・・・O.K</span>
                </div>
              </div>
              <div className="border-t border-black mt-[3px] w-full"></div>
            </div>
          </div>
        </div>
      </section>
    ),
  },
  {
    //  c4 = 下柱の検討 (Consideration of lower pillars) and 荷重計算 (Load calculation)
    id: "c4",
    node: (
      <section>
        {/* Main-section: 4. 下柱の検討 (Consideration of lower pillars) + material specifications */}
        <h2 className="page1-title">
          <span className="page1-number">4.</span>
          <span className="page1-text tracking-[0.1em] jp">
            {results?.[1]?.description ?? ""}
          </span>
          <span className="page1-text ml-[18px] jp">φ</span>
          <span className="page1-text">
            {results?.[1]?.diaLower?.toFixed(1) ?? ""}
          </span>
          <span className="text-[10.5pt] px-[2px] jp">×</span>
          <span className="page1-text">
            t{results?.[1]?.thickLower?.toFixed(1) ?? ""}
          </span>
          <span className="page1-text ml-[20px]">
            {results?.[1]?.material ?? ""}
          </span>
          <span className="page1-text ml-[20px]">
            Z = {results?.[1]?.SecMdl?.toFixed(2) ?? ""} cm<sup>3</sup>
          </span>
        </h2>

        <div className="flex flex-col mb-[20px]">
          {/* Sub-section: 1) 荷重計算 (Load calculation) */}
          <div className="flex justify-start ml-[22px] mb-0">
            <span className="page1-number">1).</span>
            <span className="page1-text tracking-[0.1em] jp">荷重計算</span>
          </div>

          <div className="ml-[25px]">
            {/*
              Load table:
              - Dead load (固定荷重)
              - Wind load (風荷重)
              - Used to find:
              N1 = vertical force
              Pmax1 = maximum horizontal force
            */}
            <table className="tables-pages">
              <thead>
                {/* Header Line 1 */}
                <tr className="tracking-[0.1em] jp">
                  <th className="col-num" rowspan={2}></th>
                  <th rowspan={2}>名 称</th>
                  <th className="col-left" colspan={1}>
                    単位重量
                  </th>
                  <th className="col-left" rowspan={2}>
                    個数
                  </th>
                  <th className="col-left" rowspan={1}>
                    固定荷重
                  </th>
                  <th className="col-gap"></th>
                  <th className="col-right" colspan={1}>
                    受風面積
                  </th>
                  <th className="col-right" colspan={1}>
                    風力係数
                  </th>
                  <th className="col-right" colspan={1}>
                    単位風荷重
                  </th>
                  <th className="col-right" colspan={1}>
                    個数
                  </th>
                  <th className="col-right" colspan={1}>
                    風荷重
                  </th>
                </tr>

                {/* Header line 2 (unit) */}
                <tr>
                  <th className="col-left">W(N)</th>
                  <th className="col-left">(N)</th>
                  <th className="col-gap"></th>
                  <th className="col-right">
                    (m<sup>2</sup>)
                  </th>
                  <th className="col-right">C</th>
                  <th className="col-right">P(N)</th>
                  <th className="tracking-[0.1em] jp">(受風物)</th>
                  <th className="col-right">(N)</th>
                </tr>
              </thead>

              <tbody>
                {/* Item 1 */}
                <tr>
                  <td className="col-num">1</td>
                  <td className="col-1 tracking-[0.1em] jp">灯具</td>
                  <td className="col-left">36.3</td>
                  <td className="col-left">1</td>
                  <td className="col-left">36.3</td>
                  <td className="col-gap"></td>
                  <td className="col-right"></td>
                  <td className="col-right"></td>
                  <td className="col-right">143.9</td>
                  <td className="col-right">1</td>
                  <td className="col-right">143.9</td>
                </tr>

                {/* Item 2 */}
                <tr>
                  <td className="col-num">2</td>
                  <td className="col-1 tracking-[0.1em] jp">上柱</td>
                  <td className="col-left">149.6</td>
                  <td className="col-left">1</td>
                  <td className="col-left">149.6</td>
                  <td className="col-gap"></td>
                  <td className="col-right"></td>
                  <td className="col-right"></td>
                  <td className="col-right">310.0</td>
                  <td className="col-right">1</td>
                  <td className="col-right">310.0</td>
                </tr>

                {/* Item 3 */}
                <tr>
                  <td className="col-num">3</td>
                  <td className="col-1 tracking-[0.1em] jp">下柱</td>
                  <td className="col-left">167.2</td>
                  <td className="col-left">1</td>
                  <td className="col-left">167.2</td>
                  <td class="col-gap"></td>
                  <td className="col-right">0.203</td>
                  <td className="col-right">0.7</td>
                  <td className="col-right">314.6</td>
                  <td className="col-right">1</td>
                  <td className="col-right">314.6</td>
                </tr>
              </tbody>

              {/* Total N2(vertical force) dan Pmax 2(horizontal force) */}
              <tfoot>
                <tr>
                  <td className="col-num"></td>
                  <td className="col-1-tf"></td>
                  <td colspan={2} className="tfoot-title col-left">
                    <span className="tracking-[0.1em] jp">鉛直力 </span>N2=
                  </td>
                  <td className="tfoot-value col-left">353.1</td>
                  <td className="col-gap"></td>
                  <td colspan={4} className="tfoot-title col-right">
                    <span className="tracking-[0.1em] jp">水平力 </span>
                    Pmax2=
                  </td>
                  <td colspan={1} className="tfoot-value col-right">
                    768.5
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    ),
  },
  {
    // c5 = 風時曲げモーメント (Bending Moment due to Wind)
    id: "c5",
    node: (
      <section>
        {/* Sub-section: 2) 風時曲げモーメント (Bending Moment due to Wind) */}
        <div className="flex flex-col mb-[20px]">
          <div className="flex justify-start ml-[22px] mb-0">
            <span className="page1-number">2).</span>
            <span className="page1-text tracking-[0.1em] jp">
              風時曲げモーメント
            </span>
          </div>

          {/* Moment formula */}
          <div className="flex justify-start ml-[44px]">
            <span className="mr-[8px]">Mp2 =</span>
            <span className="mr-[8px]">P1・H4+P2・(H2/2+H3)+P3・H3/2 =</span>
            <span>1596.0 N・m</span>
          </div>
        </div>
      </section>
    ),
  },
  {
    // c6 = 曲げ応力度 (Bending Stress)
    id: "c6",
    node: (
      <section>
        {/* Sub-section: 3) 曲げ応力度 (Bending Stress) */}
        <div className="flex flex-col mb-[20px]">
          <div className="flex justify-start ml-[22px] mb-0">
            <span className="page1-number">3).</span>
            <span className="page1-text tracking-[0.1em] jp">曲げ応力度</span>
          </div>

          {/* Bending stress calculation */}
          <div className="flex justify-start ml-[44px]">
            <span className="mr-[8px] tracking-[0.1em]">cσb =</span>
            <span className="mr-[8px]">Mp2/Z =</span>
            <span>
              32.0 N/mm<sup>2</sup>
            </span>
          </div>

          {/* Checking the ratio to allowable stress */}
          <div className="ml-[68px] leading-none inline-block">
            <div className="inline-block">
              <div className="flex items-center whitespace-nowrap">
                <div className="flex flex-col items-center">
                  <div className="border-b border-black pb-[3px] tracking-[0.1em] px-1.5">
                    cσb
                  </div>
                  <div className="mt-[3px] tracking-[0.05em]">sfb</div>
                </div>
                <div className="mx-2">=</div>
                <div className="flex flex-col items-center">
                  <div className="border-b border-black pb-[3px] px-1.5">
                    32.0
                  </div>
                  <div className="mt-[3px]">235</div>
                </div>
                <div className="mx-2">=</div>
                <div className="flex items-center">
                  <span>0.136</span>
                  <span className="mx-3.5">&lt;</span>
                  <span className="pr-4">1.0・・・O.K</span>
                </div>
              </div>
              <div className="border-t border-black mt-[3px] w-full"></div>
            </div>
          </div>
        </div>
      </section>
    ),
  },

  {
    // c7 = 基礎部に加わる応力 (Stress applied to the foundation)
    id: "c7",
    node: (
      <section>
        {/* Main-section: 5. 基礎部に加わる応力 (Stress applied to the foundation) */}
        <h2 className="page1-title">
          <span className="page1-number">5.</span>
          <span className="page1-text tracking-[0.1em] jp">
            基礎部に加わる応力
          </span>
        </h2>

        <div className="flex justify-start ml-[22px]">
          <div className="flex flex-col mb-0 mr-8">
            <div className="page1-text tracking-[0.1em] jp">・鉛直力</div>
            <div className="page1-text tracking-[0.1em] jp">・水平力</div>
            <div className="page1-text tracking-[0.1em] jp">
              ・曲げモーメント
            </div>
          </div>
          <div className="flex flex-col mb-0 mr-1">
            <div className="page1-text">N</div>
            <div className="page1-text">P</div>
            <div className="page1-text">M</div>
          </div>
          <div className="flex flex-col mb-0 mr-1">
            <div className="page1-text">=</div>
            <div className="page1-text">=</div>
            <div className="page1-text">=</div>
          </div>
          <div className="flex flex-col mb-0">
            <div className="page1-text">353.1 N</div>
            <div className="page1-text">1596.0 N</div>
            <div className="page1-text">1596.0 N・m</div>
          </div>
        </div>
      </section>
    ),
  },
];
