# 해부학 데이터 저작자 표시

BodyParts3D, © The Database Center for Life Science, CC Attribution 4.0 International 라이선스.

- 라이선스: https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html (2025-02-27 업데이트)
- 데이터세트: https://dbarchive.biosciencedbc.jp/en/bodyparts3d/download.html
- 라이선스 조건: https://creativecommons.org/licenses/by/4.0/
- 원본 지오메트리: `isa_BP3D_4.0_obj_99.zip`, BodyParts3D 4.0.
- 영문 명칭과 관계: 같은 압축 파일의 IS-A 및 PART-OF 개념, 요소, 포함 관계 표.
- 논문: Mitsuhashi et al. (2009), BodyParts3D: 3D structure database for anatomical concepts. https://doi.org/10.1093/nar/gkn613

수정 내역: 축과 단위를 밀리미터/Z축 상향에서 미터/Y축 상향으로 변환하고 무대 기준 위치로 이동했습니다. 구조별 상대 오차 한도 0.2%로 meshoptimizer를 사용해 지오메트리를 단순화했습니다. 법선 벡터는 부호 있는 16비트 정수로 양자화하고 바이너리 청크로 묶었습니다. 화면에 표시할 계통 분류와 색상은 별도로 선별했습니다. 원본에는 개별 OBJ 메시 2,234개가 있으며 모두 유지했습니다. 결합된 계층에는 명명된 FMA 개념 3,432개가 있으며, 하나의 개념이 여러 메시를 참조할 수 있습니다. 매니페스트에는 원본 식별 정보를 보존했습니다.

원본 OBJ 주석에는 이전 CC BY-SA 2.1 Japan 라이선스가 언급되어 있습니다. 위에 연결된 현재의 공식 데이터베이스 라이선스는 이전 문구를 대체하며, CC BY 4.0에 따른 재배포와 수정을 명시적으로 허용합니다.

BodyParts3D는 TARO MRI와 해부학 삽화 보정을 바탕으로 만든 성인 남성 기준 해부학 모델입니다. 인체의 가능한 모든 해부학 구조나 변이를 포함한 완전한 모델은 아닙니다. 이 인터페이스는 교육용이며 임상 도구가 아닙니다.

## 과거 에셋

다음 에셋은 현재 릴리스에 포함되어 있지 않습니다.

이전 저장소 리비전에는 여성 기준 해부학 모델이 포함되어 있었습니다. Kristen Browne and Heidi Schlehlein, Human Reference Atlas / HuBMAP, *3D Reference Organ Set for Female v1.5* (2023). CC BY 4.0. 이 뷰어에 맞게 지오메트리를 수정했습니다.

- 원본 DOI: https://doi.org/10.48539/HBM352.BTSQ.586
- 데이터세트: https://lod.humanatlas.io/ref-organ/united-female/v1.5
- 원본 GLB: https://cdn.humanatlas.io/digital-objects/ref-organ/united-female/v1.5/assets/3d-vh-f-united.glb
- 라이선스: https://creativecommons.org/licenses/by/4.0/

수정 내역: 미터/Y축 상향 원본 좌표를 무대 위로 이동하고, 같은 위치의 정점을 용접한 뒤 원본 법선을 평균화했습니다. 구조별 상대 오차 한도 0.2%로 지오메트리를 단순화하고 법선을 양자화했습니다. 색상과 화면 표시용 계통 분류는 이 인터페이스에 맞게 선별했습니다. 원본 메시 888개를 모두 유지했으며, 원본 노드 1,073개를 개별 또는 복합 개념으로 선택할 수 있었습니다.

이 데이터는 전신 표면과 일부 장기를 포함한 기준 조립 모델이며 여성 생식기 해부 구조를 포함합니다. 골격과 근육은 일부만 포함되어 있습니다. 인체의 모든 구조를 담은 완전한 모델이나 한 개인을 스캔한 데이터가 아닙니다. 태반 및 탯줄 구조 8개는 Pregnancy reference로 분류되며 기본적으로 숨겨져 있었습니다.
