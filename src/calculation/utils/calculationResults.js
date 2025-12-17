import {
  calculateFlU,
  calculateCrossAp,
  calculateInasMp,
  calculateSecMdl,
  calculateRadGy,
} from "./calculatePole";

export function calculatePoleResults(sections) {
  return sections.map((section, index) => {
    const sectionName = section.name || `支柱-${index + 1}`;
    const materialType = section.material;
    const poleType = section.poleType;

    const dLower = parseFloat(section.diameterLower) || 0;
    const dUpper = parseFloat(section.diameterUpper) || 0;
    const tLower = parseFloat(section.thicknessLower) || 0;
    const tUpper = parseFloat(section.thicknessUpper) || 0;
    const h = parseFloat(section.height) || 0;
    const qty = parseFloat(section.quantity) || 1;

    // ======================
    // CALC
    // ======================
    const flU = calculateFlU(dLower, tLower);
    const CrossAp = calculateCrossAp(dLower, tLower);
    const InasMp = calculateInasMp(dLower, tLower);
    const SecMdl = calculateSecMdl(dLower, tLower);
    const RadGy = calculateRadGy(dLower, tLower);

    // ======================
    // DUMMY / TEMP VALUE
    // ======================
    const length = 1;
    const heightZ = 1;
    const centerPoint = 1;

    const fb = 156;
    const stb = 235;
    const sts = 136;
    const stc = 235;

    const sectionArea = CrossAp;
    const sectionModulus = SecMdl;
    const momentInertia = InasMp;
    const ip = 1;
    const radiusGyr = RadGy;
    const taperRatio = 1;
    const heightSection = 1;
    const typeofTaper = "温間スピニングテーパー柱";

    return {
      pole: `Pole${index + 1}`,
      description: sectionName,
      poleType,
      diaUpper: dUpper,
      diaLower: dLower,
      thickUpper: tUpper,
      thickLower: tLower,

      flU,
      CrossAp,
      InasMp,
      SecMdl,
      RadGy,

      length,
      heightZ,
      centerPoint,
      fb,
      stb,
      sts,
      stc,
      sectionArea,
      sectionModulus,
      momentInertia,
      radiusGyr,
      taperRatio,
      material: materialType,
      ip,
      heightSection,
      typeofTaper,
    };
  });
}
