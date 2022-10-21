
import { test, expect } from '@playwright/test';
import sharp from 'sharp';
import { SAMPLES } from '../constants';


test.describe('Check good build of tables', async () => {

  for (const SAMPLE of SAMPLES) {
    test(`Integrity of table #${SAMPLE.name}`, async ({ page }, testInfo) => {
      await page.goto('http://localhost:1234');
      const id = SAMPLE.name.toLowerCase()
      const buffer = await page.locator(`#${id}`).screenshot();
    
      const { data, info } = await sharp(buffer).raw().withMetadata().toBuffer({ resolveWithObject: true });
    
      const { width, height } = info;
      const colorDetection = [230, 57, 70];
    
      let hasRed = false;
      for (let y = 0; y < height; y++) {
        if (hasRed) {
          continue; //skip next pixels
        }

        for (let x = 0; x < width; x++) {
          if (hasRed) {
            continue; //skip next pixels
          }

          const pos = (y * width + x) * 4;
    
          let r1 = data[pos + 0];
          let g1 = data[pos + 1];
          let b1 = data[pos + 2];
          let a1 = data[pos + 3];
    
          if (colorDetection[0] === r1 && colorDetection[1] === g1 && colorDetection[2] === b1) {
            hasRed = true;
          }
        }
      }
    
      await testInfo.attach('screenshot', { body: buffer, contentType: 'image/png' });
      await expect(hasRed).toBeFalsy();
    });
  }

  
  
});