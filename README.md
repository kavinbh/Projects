# Detection of Face Mask and Glass Using Deep Learning Algorithm

This repository contains the official code archive and paper for the research publication: **"Detection of Face Mask and Glass Using Deep Learning Algorithm"** published in *Computer Science & Engineering: An International Journal (CSEIJ)*, Vol 12, No 6, December 2022.

---

## Repository Contents

*   **`12622cseij02.pdf`**: The full-text PDF of the published research paper.
*   **`train.py`**: The training script used to build the face mask classifier utilizing Transfer Learning with a MobileNetV2 backbone, Dense/Dropout layers, and Adam optimization.
*   **`detect_mask.py`**: The real-time inference script utilizing OpenCV and a SSD face detector to run predictions on live webcam streams.

---

## Abstract
The rapid spread of contagious infections highlights the need for automated monitoring in public spaces. This paper presents a deep learning-based framework to identify face mask compliance alongside eyewear (glass) detection. By leveraging pre-trained CNN backbones—specifically MobileNetV2, InceptionResNetV2, and Xception—and applying preprocessing techniques such as Canny segmentation, the system aims to streamline safety checkpoints and automated immigration queues where removal of facial accessories is required.

---

## Methodology Overview

*   **Face Detection:** Handled via a Single Shot Detector (SSD) framework with a ResNet-10 backbone using Caffe.
*   **Feature Extraction:** Transfer learning using MobileNetV2, InceptionResNetV2, and Xception architectures.
*   **Data Augmentation:** Scripts include rotation, zooming, translation, shearing, and horizontal flips to improve generalization.
*   **Edge Highlight:** Integration of Canny edge detection filters to isolate and identify the boundaries of glasses.

### Reported Performance
*   **Face Mask Detection Accuracy:** ~99%
*   **Glass Detection Accuracy:** ~91% (after ensembling layer averages from MobileNetV2, Xception, and InceptionResNetV2).

---

## Implementation & Path Notes

> **Note for External Users:** 
> The scripts in this archive are configured with absolute Windows directory paths pointing to local development directories (e.g., `C:\Users/skavi/...`) and expect a locally structured image dataset. 
> 
> To run these scripts on your own system (macOS, Linux, or Windows):
> 1. Update the image directory paths in `train.py` (`DIRECTORY` variable) and the model paths in `detect_mask.py` (`prototxtPath`, `weightsPath`, and `maskNet` file load).
> 2. Provide your own training dataset structured into `with_mask` and `without_mask` subdirectories.
> 3. Download the standard OpenCV Caffe face detector model files (`deploy.prototxt` and `res10_300x300_ssd_iter_140000.caffemodel`) and place them in your workspace.

---

## Citation

If you reference this work or utilize the code structure in your research, please cite the paper as follows:

```bibtex
@article{bharathi2022detection,
  title={Detection of Face Mask and Glass Using Deep Learning Algorithm},
  author={Bharathi, Kavin and Savithadevi, M.},
  journal={Computer Science \& Engineering: An International Journal (CSEIJ)},
  volume={12},
  number={6},
  pages={11--17},
  year={2022},
  doi={10.5121/cseij.2022.12602}
}
